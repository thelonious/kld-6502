#!/usr/bin/env node

let Microprocessor = require('./lib/Microprocessor');

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
