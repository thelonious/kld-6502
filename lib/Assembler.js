let Lexer = require('./Lexer'),
    Nodes = require('./nodes'),
    AddressMode = require('./AddressModes');

class Assembler {
    constructor() {
        this.symbols = {};
        this.icode = [];

        this.lexer = new Lexer();
        this.lexeme = null;
        this.type = null;
    }

    error(message) {
        throw Error("line " + this.lexeme.line + ", column " + this.lexeme.column + ": " + message);
    }

    advance() {
        var current = this.lexer.next();

        // skip over whitespace and comments
        while (current !== null) {
            if (current.token.type === "whitespace") {
                current = this.lexer.next();
            }
            else if (current.token.type === "comment") {
                current = this.lexer.next();
            }
            else {
                break;
            }
        }

        // calculate number values
        if (current !== null) {
            switch (current.token.type) {
                case "charConstant":
                    current.value = current.text.charCodeAt(1);
                    break;
                case "binaryNumber":
                    current.value = parseInt(current.text.substring(1), 2);
                    break;
                case "hexNumber":
                    current.value = parseInt(current.text.substring(1), 16);
                    break;
                case "number":
                    current.value = parseInt(current.text, 10);
                    break;
                default:
                    // ignore all other token types
                    break;
            }

            this.lexeme = current;
        }
        else {
            this.lexeme = {
                startingOffset: this.length,
                endingOffset: this.length,
                text: "",
                type: -1,
                token: { type: "eof" },
                column: this.lexer.column,
                line: this.lexer.line
            };
        }

        this.type = this.lexeme.token.type;

        return this.lexeme;
    }

    // level 0

    parse(source, memory) {
        if (memory === undefined) {
            memory = new Array(0x10000);
            memory.fill(0);
        }

        this.symbols = {};
        this.icode = [];

        this.lexer.text = source;

        // prime the lexeme pump
        this.advance();

        // process until we're done
        while (this.type != "eof") {
            var startLexeme = this.lexeme;

            switch (this.type) {
                case "directive":
                    this.parseDirective();
                    break;

                case "identifier":
                    this.parseIdentifier();
                    break;

                case "mnemonic":
                    this.parseMnemonic();
                    break;

                case "eol":
                    this.advance();
                    break;

                default:
                    this.error("Statements must begin with a directive, label, or mnemonic. Found " + this.type);
            }

            if (startLexeme === this.lexeme) {
                this.error("The parser appears to have stalled. Aborting execution");
            }
        }

        var context = {
            address: 0
        };

        this.icode.forEach(node => {
            node.emit(context).forEach(byte => {
                memory[context.address++] = byte;
            });
        });

        return memory;
    }

    // level 1

    parseDirective() {
        var expressions;

        switch (this.lexeme.text.toLowerCase()) {
            case ".ascii":
                this.parseASCII();
                break;

            case ".ds":
                this.parseDS();
                break;

            case ".db":
                this.parseDB();
                break;

            case ".dw":
                this.parseDW();
                break;

            case ".include":
                this.parseInclude();
                break;

            case ".org":
                this.parseOrg();
                break;

            default:
                this.error("Unimplemented directive: " + lexeme.text);
        }
    }

    parseIdentifier() {
        var name = this.lexeme.text;

        this.advance();

        if (this.type == "colon") {
            this.advance();
        }
        else if (this.type == "equate") {
            this.advance();

            switch (this.type) {
                case "charConstant":
                case "binaryNumber":
                case "hexNumber":
                case "number":
                    this.symbols[name] = this.lexeme.value;
                    this.advance();
                    break;

                default:
                    this.error("A number must follow the .eq directive");
            }
        }
        // else {
        //  this.symbols[name] = this.address;
        // }
    }

    parseMnemonic() {
        var mnemonic = this.lexeme.text.toLowerCase();
        var instruction = new Nodes.InstructionNode(mnemonic);

        this.advance();
        this.parseAddress(instruction);

        // clean up mode for branches
        if (instruction.mode === AddressMode.Absolute) {
            if (mnemonic.charAt(0) == "b" && mnemonic != "bit" && mnemonic != "brk") {
                instruction.mode = AddressMode.Relative;
            }
        }

        // add node to the list of icode nodes
        this.icode.push(instruction);
    }

    // level 2

    parseASCII() {
        var expressions = [];

        // advance over .ascii
        this.advance();

        while (true) {
            if (this.type != "charString") {
                this.error("Expected a string after .ascii");
            }

            // add string node
            var string = this.lexeme.text.substring(1, this.lexeme.text.length - 1);
            expressions.push(string);

            // advance over character string
            this.advance();

            if (this.type == "comma") {
                this.advance();
            }
            else {
                break;
            }
        }
        
        this.icode.push(new Nodes.StringNode(expressions));
    }

    parseDB() {
        var expressions = [];

        // advance over .db
        this.advance();

        while (true) {
            switch (this.type) {
                case "charConstant":
                case "binaryNumber":
                case "hexNumber":
                case "number":
                case "identifier":
                    expressions.push(this.parseExpression());
                    break;

                default:
                    this.error("Unknown type used in .db expression: " + this.type);
            }

            if (this.type == "comma") {
                this.advance();
            }
            else {
                break;
            }
        }

        this.icode.push(new Nodes.DBNode(expressions));
    }

    parseDS() {
        // advance over .ds
        this.advance();

        if (this.type == "number") {
            var size = this.lexeme.value;

            this.icode.push(new Nodes.DSNode(size));
            this.advance();
        }
        else {
            this.error("Expected a number after the ds directive");
        }
    }

    parseDW() {
        var expressions = [];

        // advance over .dw
        this.advance();

        while (true) {
            switch (this.type) {
                case "binaryNumber":
                case "hexNumber":
                case "number":
                case "identifier":
                    expressions.push(this.parseExpression());
                    break;
            }

            if (this.type == "comma") {
                this.advance();
            }
            else {
                break;
            }
        }

        this.icode.push(new Nodes.DWNode(expressions));
    }

    parseInclude() {
        // advance over .include
        this.advance();

        if (this.type == "charString") {
            // TODO: implement
            this.advance();
        }
        else {
            this.error("Expected a string after the include directive");
        }
    }

    parseOrg() {
        // advance over .org
        this.advance();

        switch (this.type) {
            case "binaryNumber":
            case "hexNumber":
            case "number":
                // set current address
                var address = this.lexeme.value;

                // advance over number
                this.advance();

                this.icode.push(new Nodes.OrgNode(address));
                break;

            default:
                this.error("Expected a number after the org directive");
        }
    }

    parseAddress(instruction) {
        switch (this.type) {
            case "accumulator":
                instruction.mode = AddressMode.Accumulator;
                this.advance();
                break;

            case "identifier":
                this.parseAbsoluteAddress(instruction);
                break;

            case "lparen":
                this.advance();
                this.parseIndirect(instruction);
                break;

            case "charConstant":
            case "binaryNumber":
            case "hexNumber":
            case "number":
                this.parseAbsoluteAddress(instruction);
                break;

            case "pound":
                this.advance();

                switch (this.type) {
                    case "charConstant":
                    case "binaryNumber":
                    case "hexNumber":
                    case "number":
                        instruction.mode = AddressMode.Immediate;
                        instruction.addressExpression = this.parseExpression();
                        break;

                    default:
                        this.error("A number or label must follow a pound symbol");
                }
                break;

            case "eof":
                break;

            default:
                this.error("Unknown address type: " + this.type);
        }
    }

    // level 3

    parseExpression() {
        var result = null;

        switch (this.type) {
            case "binaryNumber":
            case "charConstant":
            case "hexNumber":
            case "number":
                result = new Nodes.NumberNode(this.lexeme.value);
                this.advance();
                break;

            case "identifier":
                result = new Nodes.IdentifierNode(this.lexeme.text);
                this.advance();
                break;

            default:
                this.error("Expected a number of an identifier in the current expression");
                break;
        }

        switch (this.type) {
            case "lowByte":
                result = new Nodes.LowByteNode(result);
                this.advance();
                break;

            case "highByte":
                result = new Nodes.HighByteNode(result);
                this.advance();
                break;

            case "plus":
                this.advance();
                result = new Nodes.AdditionNode(result, this.parseExpression());
                break;

            case "times":
                this.advance();
                result = new Nodes.MultiplicationNode(result, this.parseExpression());
                break;
        }

        return result;
    }

    parseAbsoluteAddress(instruction) {
        var expression = this.parseExpression();

        if (this.type == "comma") {
            this.advance();

            if (this.type == "register") {
                switch (this.lexeme.text.toLowerCase()) {
                    case "x":
                        if (expression.byteCount < 2) {
                            instruction.mode = AddressMode.ZeroPageX;
                        }
                        else {
                            instruction.mode = AddressMode.AbsoluteX;
                        }
                        this.advance();
                        break;

                    case "y":
                        if (expression.byteCount < 2) {
                            instruction.mode = AddressMode.ZeroPageY;
                        } else {
                            instruction.mode = AddressMode.AbsoluteY;
                        }
                        this.advance();
                        break;

                    default:
                        this.error("Unrecognized register: " + lexeme.text);
                        break;
                }
            }
            else {
                this.error("accumulator must follow a comma following an address");
            }
        }
        else {
            if (expression.byteCount < 2) {
                instruction.mode = AddressMode.ZeroPage;
            }
            else {
                instruction.mode = AddressMode.Absolute;
            }
        }

        instruction.addressExpression = expression;
    }

    parseIndirect(instruction) {
        var expression = this.parseExpression();

        switch (this.type) {
            case "comma":
                this.advance();

                if (expression.byteCount > 1) {
                    this.error("Only page zero addresses can be used with indirect addressing");
                }
                else if (this.type == "register") {
                    if (this.lexeme.text.toLowerCase() == "x") {
                        instruction.mode = AddressMode.IndirectX;
                        this.advance();

                        if (this.type != "rparen") {
                            this.error("Pre-index indirect address mode (indirect x) must end with a closing parenthesis");
                        }
                        else {
                            this.advance();
                        }
                    }
                    else {
                        this.error("Only the x register can be used within the parentheses");
                    }
                }
                else {
                    this.error("Expected x register after the comma");
                }
                break;

            case "rparen":
                this.advance();

                if (this.type == "comma") {
                    this.advance();

                    if (expression.byteCount > 1) {
                        this.error("Only page zero addresses can be used with indirect addressing");
                    }
                    else if (this.lexeme !== null && this.type == "register") {
                        if (this.lexeme.text.toLowerCase() == "y") {
                            instruction.mode = AddressMode.IndirectY;
                            this.advance();
                        }
                        else {
                            this.error("Only the y register can be used outside the parentheses");
                        }
                    }
                    else {
                        this.error("Expected y register after the comma");
                    }
                }
                else {
                    instruction.mode = AddressMode.Indirect;
                }
                break;

            default:
                this.error("Indirect addresses must be followed by a comma or a closing parethesis");
                break;
        }

        instruction.addressExpression = expression;
    }
}

module.exports = Assembler;
