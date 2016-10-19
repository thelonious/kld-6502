#!/usr/bin/env node

var AddressModes = require('../lib/AddressModes'),
	Opcodes      = require('../lib/Opcodes'),
	Mustache = require("mustache"),
	fs = require('fs'),
	template = fs.readFileSync('./test.mustache', { encoding: "utf8" });

let args = {
	Absolute:    { source: "$600",    bytes: [ 0x00, 0x06 ] },
	AbsoluteX:   { source: "$600,x",  bytes: [ 0x00, 0x06 ] },
	AbsoluteY:   { source: "$600,y",  bytes: [ 0x00, 0x06 ] },
	Accumulator: { source: "a",       bytes: [] },
	Immediate:   { source: "#$67",    bytes: [ 0x67 ] },
	Implied:     { source: null,      bytes: [] },
	Indirect:    { source: "($600)",  bytes: [ 0x00, 0x06 ] },
	IndirectX:   { source: "($67,x)", bytes: [ 0x67 ] },
	IndirectY:   { source: "($67),y", bytes: [ 0x67 ] },
	Relative:    { source: "$610",    bytes: [ 0x0E ] },
	ZeroPage:    { source: "$67",     bytes: [ 0x67 ] },
	ZeroPageX:   { source: "$67,x",   bytes: [ 0x67 ] },
	ZeroPageY:   { source: "$67,y",   bytes: [ 0x67 ] }
};

let indexMap = [];
Object.keys(AddressModes).forEach(key => indexMap[AddressModes[key]] = key);

let data = {
	entries: []
};

Object.keys(Opcodes).forEach(mnemonic => {
	Opcodes[mnemonic].forEach((opcode, index) => {
		if (opcode !== -1) {
			var parts = [];
			var values = [];

			var mode = indexMap[index];
			var arg = args[mode];

			values.push(opcode);
			values = values.concat(arg.bytes);
			parts.push(mnemonic);

			if (arg.source !== null && arg.source !== "") {
				parts.push(arg.source);
			}

			var modeText = mode.replace(/([A-Z])/g, match => {
				return " " + match.toLowerCase();
			});

			data.entries.push({
				name: mnemonic + "," + modeText,
				source: parts.join(" "),
				values: JSON.stringify(values)
			});
		}
	});
});

Mustache.parse(template);

var result = Mustache.render(template, data);

console.log(result);
