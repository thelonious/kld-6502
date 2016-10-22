let AddressMode = require('../../AddressModes'),
    opcodes = require('../../Opcodes'),
    util = require('util');

// byte counts by address mode
//                ABS  ABSX ABSY ACC  IMM  IMPL IND  INDX INDY REL  ZERO ZERX ZERY
let byteCounts = [3,   3,   3,   1,   2,   1,   3,   2,   2,   2,   2,   2,   2];


class InstructionNode {
    constructor(mnemonic, mode) {
        this.mnemonic = mnemonic;
        this.mode = AddressMode.Implied;
        this.addressExpression = null;
    }

    get byteCount() {
        return byteCounts[this.mode];
    }

    get opcode() {
        return opcodes[this.mnemonic][this.mode];
    }

    emit(context) {
        var value = -1,
            result = [];

        if (this.opcode < 0) {
            if (this.mode == AddressMode.Implied) {
                this.mode = AddressMode.Accumulator;

                // The opcode changes values because of the mode change above
                if (this.opcode < 0) {
                    var message = util.format(
                        "%s does not support the '%s' address mode",
                        this.mnemonic,
                        this.mode
                    );

                    throw new Error(message);
                }
            }
        }

        if (this.addressExpression !== null) {
            value = this.addressExpression.value;

            if (value <= 0xFF) {
                switch (this.mode) {
                    case AddressMode.Absolute:
                        if (opcodes[this.mnemonic][AddressMode.ZeroPage] !== -1) {
                            this.mode = AddressMode.ZeroPage;
                        }
                        break;

                    case AddressMode.AbsoluteX:
                        if (opcodes[this.mnemonic][AddressMode.ZeroPageX] !== -1) {
                            this.mode = AddressMode.ZeroPageX;
                        }
                        break;

                    case AddressMode.AbsoluteY:
                        if (opcodes[this.mnemonic][AddressMode.ZeroPageY] !== -1) {
                            this.mode = AddressMode.ZeroPageY;
                        }
                        break;

                    default:
                        // do nothing
                        break;
                }
            }
        }

        result[0] = this.opcode;

        switch (this.mode) {
            case AddressMode.Absolute:
            case AddressMode.AbsoluteX:
            case AddressMode.AbsoluteY:
            case AddressMode.Indirect:
                if (value < 0 || 0xFFFF < value) {
                    throw new Error("Address is out of range: " + value);
                }
                result[1] = value & 0xFF;
                result[2] = (value >> 8) & 0xFF;
                break;

            case AddressMode.Accumulator:
            case AddressMode.Implied:
                break;

            case AddressMode.Immediate:
                if (value < -127 || 0xFF < value) {
                    throw new Error("Immediate value is out of range: " + value);
                }
                result[1] = value & 0xFF;
                break;

            case AddressMode.IndirectX:
            case AddressMode.IndirectY:
            case AddressMode.ZeroPage:
            case AddressMode.ZeroPageX:
            case AddressMode.ZeroPageY:
                if (value < 0 || 0xFF < value) {
                    throw new Error("Indirect address is out of range: " + value);
                }
                result[1] = value;
                break;

            case AddressMode.Relative:
                var offset = value - context.address - 2;

                if (offset < -127 || 128 < offset) {
                    throw new Error("Relative offset is too large: " + offset);
                }
                if (offset < 0) {
                    offset = offset & 0xFF;
                }
                result[1] = offset;
                break;

            default:
                throw new Error("Unrecognized address mode: " + mode);
        }

        return result;
    }
}

module.exports = InstructionNode;
