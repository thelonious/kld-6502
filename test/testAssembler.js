let assert       = require('assert'),
	Assembler    = require('../lib/Assembler'),
	AddressModes = require('../lib/AddressModes'),
	Opcodes      = require('../lib/Opcodes');

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

console.log(indexMap.join(","));

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

	it("should parse opcodes with supported address modes", function() {
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

					var source = parts.join(" ");
					var memory = assemble(".org $600\n" + source);

					assert.ok(memory !== undefined);
				}
			});
		});
	});

});
