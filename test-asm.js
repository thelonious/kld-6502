#!/usr/bin/env node

let Assembler = require('./lib/Assembler'),
	fs = require('fs'),
	Table = require('kld-text-utils').Table;

let assembler = new Assembler();
let source = fs.readFileSync('./samples/luigi.6502', { encoding: "utf8" });

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

showLexemes(source);

// assembler.parse(source);
