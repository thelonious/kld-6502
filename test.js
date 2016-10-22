#!/usr/bin/env node

let Microprocessor = require('./lib/Microprocessor'),
    Disassembler = require('./lib/Disassembler'),
    Table = require('kld-text-utils').Table,
    format = require('kld-text-utils').format;

let memory = new Array(0x10000);
let micro = new Microprocessor(memory);

// set start vector
micro.startVector = 0x0600;

// load program
memory[0x0600] = 0xa9;
memory[0x0601] = 0x10;

// warm boot
micro.warmboot();
console.log("before = %s", JSON.stringify(micro.registers, null, 2));

// advance
micro.advance();
console.log("after  = %s", JSON.stringify(micro.registers, null, 2));

console.log("cycles = %s", micro.cycles);

let table = new Table();
table.headers = ["addr", "bytes", "mnemonic", "operand"];
let dasm = new Disassembler();
let result = dasm.disassemble(memory, 0x600, 0x603);
let rows = result.map(item => {
    return [
        format("{0:X4}", item.address),
        item.bytes.map(byte => format("{0:X2}", byte)).join(" "),
        item.mnemonic,
        item.operand
    ];
});

rows.forEach(row => table.addRow(row));

console.log(table.toString());
