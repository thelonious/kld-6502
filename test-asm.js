#!/usr/bin/env node

let Assembler = require('./lib/Assembler'),
    Disassembler = require('./lib/Disassembler'),
    fs = require('fs'),
    path = require('path'),
    Table = require('kld-text-utils').Table,
    format = require('kld-text-utils').format;

let assembler = new Assembler();
let file = path.resolve(process.argv[2]);
let source = fs.readFileSync(file, { encoding: "utf8" });

// console.log("file = %s", file);
// console.log(source);

function showLexemes(source) {
    // setup lexer
    let lexer = assembler.lexer;
    lexer.text = source;

    // define table and headers
    var table = new Table();
    table.headers = ["Type", "Line", "Column", "Text"];

    // collect lexemes
    var result = lexer.next();

    while (result !== null) {
        if (result.type >= 2) {
            table.addRow([
                result.token.type,
                result.line,
                result.column,
                result.text
            ]);
        }
        result = lexer.next();
    }

    // show results
    console.log(table.toString());
}

function disassemble(memory, start, end) {
    let dasm = new Disassembler();
    let result = dasm.disassemble(memory, start, end);

    let table = new Table();
    table.headers = ["addr", "bytes", "op", "operand"];

    result.forEach(item => {
        table.addRow([
            format("{0:X4}", item.address),
            item.bytes.map(byte => format("{0:X2}", byte)).join(" "),
            item.mnemonic,
            item.operand
        ]);
    });

    console.log(table.toString());
}

// showLexemes(source);

var info = assembler.parse(source);

info.ranges.forEach(range => {
    if (range.types.includes("data")) {
        console.log(
            "skipping data section: [%s,%s]",
            range.start.toString(16).toUpperCase(),
            range.end.toString(16).toUpperCase()
        );
    }
    else {
        disassemble(info.memory, range.start, range.end);
    }
    console.log();
});
