#!/usr/bin/env node

let Microprocessor = require('./lib/Microprocessor');

let memory = new Array(0x10000);
let micro = new Microprocessor(memory);

// load program
memory[0x0600] = 0xa9;
memory[0x0601] = 0x10;

// set start vector
memory[0xfffc] = 0x00;
memory[0xfffd] = 0x06;

// warm boot
micro.warmboot();
console.log("before = %s", JSON.stringify(micro.registers, null, 2));

// advance
micro.advance();
console.log("after  = %s", JSON.stringify(micro.registers, null, 2));
