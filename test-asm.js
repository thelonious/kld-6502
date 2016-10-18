#!/usr/bin/env node

let Assembler = require('./lib/Assembler'),
	fs = require('fs');

let assembler = new Assembler();
let source = fs.readFileSync('./divide.6502', { encoding: "utf8" });
let lexer = assembler.lexer;

lexer.text = source;
console.log(source);

var result = lexer.next();

while (result !== null) {
	if (result.type >= 2) {
		console.log("[%s]: %s", result.token.type, result.text);
	}
	result = lexer.next();
}

console.log("done");
