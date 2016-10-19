let assert    = require('assert'),
	Assembler = require('../lib/Assembler');

function assemble(source) {
	var assembler = new Assembler();

	return assembler.parse(source);
}

function assertMemory(memory, values, startingAddress) {
	values.forEach((value, index) => {
		assert.equal(memory[startingAddress + index], value);
	});
}

describe("Assembler", function() {

	it("should parse .ds", function() {
		var source = [
			".db 10",
			".ds 5",
			".db 20"
		].join("\n");
		var values = [10, 0, 0, 0, 0, 0, 20];
		var memory = assemble(source);

		assertMemory(memory, values, 0);
	});

	it("should parse .db", function() {
		var memory = assemble(".db 10, 20, 30");
		var values = [10, 20, 30];

		assertMemory(memory, values, 0);
	});

	it("should parse .dw", function() {
		var memory = assemble(".dw 10, 20, 30");
		var values = [10, 0, 20, 0, 30, 0];

		assertMemory(memory, values, 0);
	});

	it("should parse .l", function() {
		var memory = assemble(".db $610.l, $620.l, $630.l");
		var values = [0x10, 0x20, 0x30];

		assertMemory(memory, values, 0);
	});

	it("should parse .h", function() {
		var memory = assemble(".db $610.h, $720.h, $830.h");
		var values = [6, 7, 8];

		assertMemory(memory, values, 0);
	});

	it("should parse .include", function() {
		var memory = assemble(".include \"test.6502\"");

		assert.ok(memory !== undefined);
	});

	it("should parse .org", function() {
		var memory = assemble(".org $600");

		assert.ok(memory !== undefined);
	});

	it("should parse an identifier", function() {
		var memory = assemble("main");

		assert.ok(memory !== undefined);
	});

	it("should parse an identifier with a colon", function() {
		var memory = assemble("main:");

		assert.ok(memory !== undefined);
	});

	it("should parse an equate", function() {
		var source = "width .equ 100";
		var assembler = new Assembler();
		var memory = assembler.parse(source);

		assert.ok(memory !== undefined);
		assert.equal(assembler.symbols.width, 100);
	});

	it("should parse .org", function() {
		var source = [
			".org $600",
			".db 10, 20, 30"
		].join("\n");
		var memory = assemble(source);
		var values = [10, 20, 30];

		assertMemory(memory, values, 0x600);
	});

});
