#!/usr/bin/env node

var AddressModes = require('../lib/AddressModes'),
	Opcodes      = require('../lib/Opcodes'),
	Mustache = require("mustache"),
	fs = require('fs'),
	template = fs.readFileSync('./test.mustache', { encoding: "utf8" });

let args = {
	Absolute:    "$600",
	AbsoluteX:   "$600,x",
	AbsoluteY:   "$600,y",
	Accumulator: "a",
	Immediate:   "#$67",
	Implied:     null,
	Indirect:    "($600)",
	IndirextX:   "($67,x)",
	IndirectY:   "($67),y",
	Relative:    "$610",
	ZeroPage:    "$67",
	ZeroPageX:   "$67,x",
	ZeroPageY:   "$67,y"
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
			var mode = indexMap[index];
			var arg = args[mode];

			parts.push(mnemonic);

			if (arg !== null && arg !== "") {
				parts.push(arg);
			}

			data.entries.push({
				name: "should parse " + mnemonic + ", " + mode,
				source: parts.join(" ")
			});
		}
	});
});

Mustache.parse(template);

var result = Mustache.render(template, data);

console.log(result);
