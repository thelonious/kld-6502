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

	// ** BEGIN Generated Tests

	it("should parse should parse adc, Absolute", function() {
		var source = [
			".org $600",
			"adc $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, AbsoluteX", function() {
		var source = [
			".org $600",
			"adc $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, AbsoluteY", function() {
		var source = [
			".org $600",
			"adc $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, Immediate", function() {
		var source = [
			".org $600",
			"adc #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, IndirextX", function() {
		var source = [
			".org $600",
			"adc ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, IndirectY", function() {
		var source = [
			".org $600",
			"adc ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, ZeroPage", function() {
		var source = [
			".org $600",
			"adc $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, ZeroPageX", function() {
		var source = [
			".org $600",
			"adc $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, Absolute", function() {
		var source = [
			".org $600",
			"and $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, AbsoluteX", function() {
		var source = [
			".org $600",
			"and $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, AbsoluteY", function() {
		var source = [
			".org $600",
			"and $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, Immediate", function() {
		var source = [
			".org $600",
			"and #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, IndirextX", function() {
		var source = [
			".org $600",
			"and ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, IndirectY", function() {
		var source = [
			".org $600",
			"and ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, ZeroPage", function() {
		var source = [
			".org $600",
			"and $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, ZeroPageX", function() {
		var source = [
			".org $600",
			"and $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse asl, Absolute", function() {
		var source = [
			".org $600",
			"asl $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse asl, AbsoluteX", function() {
		var source = [
			".org $600",
			"asl $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse asl, Accumulator", function() {
		var source = [
			".org $600",
			"asl a"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse asl, ZeroPage", function() {
		var source = [
			".org $600",
			"asl $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse asl, ZeroPageX", function() {
		var source = [
			".org $600",
			"asl $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bcc, Relative", function() {
		var source = [
			".org $600",
			"bcc $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bcs, Relative", function() {
		var source = [
			".org $600",
			"bcs $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse beq, Relative", function() {
		var source = [
			".org $600",
			"beq $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bit, Absolute", function() {
		var source = [
			".org $600",
			"bit $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bit, ZeroPage", function() {
		var source = [
			".org $600",
			"bit $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bmi, Relative", function() {
		var source = [
			".org $600",
			"bmi $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bne, Relative", function() {
		var source = [
			".org $600",
			"bne $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bpl, Relative", function() {
		var source = [
			".org $600",
			"bpl $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse brk, Implied", function() {
		var source = [
			".org $600",
			"brk"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bvc, Relative", function() {
		var source = [
			".org $600",
			"bvc $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bvs, Relative", function() {
		var source = [
			".org $600",
			"bvs $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse clc, Implied", function() {
		var source = [
			".org $600",
			"clc"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cld, Implied", function() {
		var source = [
			".org $600",
			"cld"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cli, Implied", function() {
		var source = [
			".org $600",
			"cli"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse clv, Implied", function() {
		var source = [
			".org $600",
			"clv"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, Absolute", function() {
		var source = [
			".org $600",
			"cmp $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, AbsoluteX", function() {
		var source = [
			".org $600",
			"cmp $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, AbsoluteY", function() {
		var source = [
			".org $600",
			"cmp $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, Immediate", function() {
		var source = [
			".org $600",
			"cmp #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, IndirextX", function() {
		var source = [
			".org $600",
			"cmp ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, IndirectY", function() {
		var source = [
			".org $600",
			"cmp ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, ZeroPage", function() {
		var source = [
			".org $600",
			"cmp $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, ZeroPageX", function() {
		var source = [
			".org $600",
			"cmp $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cpx, Absolute", function() {
		var source = [
			".org $600",
			"cpx $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cpx, Immediate", function() {
		var source = [
			".org $600",
			"cpx #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cpx, ZeroPage", function() {
		var source = [
			".org $600",
			"cpx $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cpy, Absolute", function() {
		var source = [
			".org $600",
			"cpy $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cpy, Immediate", function() {
		var source = [
			".org $600",
			"cpy #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cpy, ZeroPage", function() {
		var source = [
			".org $600",
			"cpy $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse dec, Absolute", function() {
		var source = [
			".org $600",
			"dec $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse dec, AbsoluteX", function() {
		var source = [
			".org $600",
			"dec $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse dec, ZeroPage", function() {
		var source = [
			".org $600",
			"dec $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse dec, ZeroPageX", function() {
		var source = [
			".org $600",
			"dec $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse dex, Implied", function() {
		var source = [
			".org $600",
			"dex"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse dey, Implied", function() {
		var source = [
			".org $600",
			"dey"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, Absolute", function() {
		var source = [
			".org $600",
			"eor $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, AbsoluteX", function() {
		var source = [
			".org $600",
			"eor $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, AbsoluteY", function() {
		var source = [
			".org $600",
			"eor $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, Immediate", function() {
		var source = [
			".org $600",
			"eor #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, IndirextX", function() {
		var source = [
			".org $600",
			"eor ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, IndirectY", function() {
		var source = [
			".org $600",
			"eor ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, ZeroPage", function() {
		var source = [
			".org $600",
			"eor $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, ZeroPageX", function() {
		var source = [
			".org $600",
			"eor $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse inc, Absolute", function() {
		var source = [
			".org $600",
			"inc $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse inc, AbsoluteX", function() {
		var source = [
			".org $600",
			"inc $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse inc, ZeroPage", function() {
		var source = [
			".org $600",
			"inc $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse inc, ZeroPageX", function() {
		var source = [
			".org $600",
			"inc $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse inx, Implied", function() {
		var source = [
			".org $600",
			"inx"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse iny, Implied", function() {
		var source = [
			".org $600",
			"iny"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse jmp, Absolute", function() {
		var source = [
			".org $600",
			"jmp $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse jmp, Indirect", function() {
		var source = [
			".org $600",
			"jmp ($600)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse jsr, Absolute", function() {
		var source = [
			".org $600",
			"jsr $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, Absolute", function() {
		var source = [
			".org $600",
			"lda $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, AbsoluteX", function() {
		var source = [
			".org $600",
			"lda $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, AbsoluteY", function() {
		var source = [
			".org $600",
			"lda $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, Immediate", function() {
		var source = [
			".org $600",
			"lda #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, IndirextX", function() {
		var source = [
			".org $600",
			"lda ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, IndirectY", function() {
		var source = [
			".org $600",
			"lda ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, ZeroPage", function() {
		var source = [
			".org $600",
			"lda $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, ZeroPageX", function() {
		var source = [
			".org $600",
			"lda $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldx, Absolute", function() {
		var source = [
			".org $600",
			"ldx $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldx, AbsoluteY", function() {
		var source = [
			".org $600",
			"ldx $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldx, Immediate", function() {
		var source = [
			".org $600",
			"ldx #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldx, ZeroPage", function() {
		var source = [
			".org $600",
			"ldx $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldx, ZeroPageY", function() {
		var source = [
			".org $600",
			"ldx $67,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldy, Absolute", function() {
		var source = [
			".org $600",
			"ldy $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldy, AbsoluteX", function() {
		var source = [
			".org $600",
			"ldy $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldy, Immediate", function() {
		var source = [
			".org $600",
			"ldy #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldy, ZeroPage", function() {
		var source = [
			".org $600",
			"ldy $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldy, ZeroPageX", function() {
		var source = [
			".org $600",
			"ldy $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lsr, Absolute", function() {
		var source = [
			".org $600",
			"lsr $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lsr, AbsoluteX", function() {
		var source = [
			".org $600",
			"lsr $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lsr, Accumulator", function() {
		var source = [
			".org $600",
			"lsr a"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lsr, ZeroPage", function() {
		var source = [
			".org $600",
			"lsr $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lsr, ZeroPageX", function() {
		var source = [
			".org $600",
			"lsr $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse nop, Implied", function() {
		var source = [
			".org $600",
			"nop"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, Absolute", function() {
		var source = [
			".org $600",
			"ora $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, AbsoluteX", function() {
		var source = [
			".org $600",
			"ora $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, AbsoluteY", function() {
		var source = [
			".org $600",
			"ora $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, Immediate", function() {
		var source = [
			".org $600",
			"ora #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, IndirextX", function() {
		var source = [
			".org $600",
			"ora ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, IndirectY", function() {
		var source = [
			".org $600",
			"ora ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, ZeroPage", function() {
		var source = [
			".org $600",
			"ora $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, ZeroPageX", function() {
		var source = [
			".org $600",
			"ora $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse pha, Implied", function() {
		var source = [
			".org $600",
			"pha"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse php, Implied", function() {
		var source = [
			".org $600",
			"php"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse pla, Implied", function() {
		var source = [
			".org $600",
			"pla"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse plp, Implied", function() {
		var source = [
			".org $600",
			"plp"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rol, Absolute", function() {
		var source = [
			".org $600",
			"rol $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rol, AbsoluteX", function() {
		var source = [
			".org $600",
			"rol $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rol, Accumulator", function() {
		var source = [
			".org $600",
			"rol a"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rol, ZeroPage", function() {
		var source = [
			".org $600",
			"rol $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rol, ZeroPageX", function() {
		var source = [
			".org $600",
			"rol $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ror, Absolute", function() {
		var source = [
			".org $600",
			"ror $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ror, AbsoluteX", function() {
		var source = [
			".org $600",
			"ror $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ror, Accumulator", function() {
		var source = [
			".org $600",
			"ror a"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ror, ZeroPage", function() {
		var source = [
			".org $600",
			"ror $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ror, ZeroPageX", function() {
		var source = [
			".org $600",
			"ror $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rti, Implied", function() {
		var source = [
			".org $600",
			"rti"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rts, Implied", function() {
		var source = [
			".org $600",
			"rts"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, Absolute", function() {
		var source = [
			".org $600",
			"sbc $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, AbsoluteX", function() {
		var source = [
			".org $600",
			"sbc $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, AbsoluteY", function() {
		var source = [
			".org $600",
			"sbc $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, Immediate", function() {
		var source = [
			".org $600",
			"sbc #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, IndirextX", function() {
		var source = [
			".org $600",
			"sbc ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, IndirectY", function() {
		var source = [
			".org $600",
			"sbc ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, ZeroPage", function() {
		var source = [
			".org $600",
			"sbc $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, ZeroPageX", function() {
		var source = [
			".org $600",
			"sbc $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sec, Implied", function() {
		var source = [
			".org $600",
			"sec"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sed, Implied", function() {
		var source = [
			".org $600",
			"sed"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sei, Implied", function() {
		var source = [
			".org $600",
			"sei"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, Absolute", function() {
		var source = [
			".org $600",
			"sta $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, AbsoluteX", function() {
		var source = [
			".org $600",
			"sta $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, AbsoluteY", function() {
		var source = [
			".org $600",
			"sta $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, IndirextX", function() {
		var source = [
			".org $600",
			"sta ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, IndirectY", function() {
		var source = [
			".org $600",
			"sta ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, ZeroPage", function() {
		var source = [
			".org $600",
			"sta $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, ZeroPageX", function() {
		var source = [
			".org $600",
			"sta $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse stx, Absolute", function() {
		var source = [
			".org $600",
			"stx $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse stx, ZeroPage", function() {
		var source = [
			".org $600",
			"stx $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse stx, ZeroPageY", function() {
		var source = [
			".org $600",
			"stx $67,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sty, Absolute", function() {
		var source = [
			".org $600",
			"sty $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sty, ZeroPage", function() {
		var source = [
			".org $600",
			"sty $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sty, ZeroPageX", function() {
		var source = [
			".org $600",
			"sty $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse tax, Implied", function() {
		var source = [
			".org $600",
			"tax"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse tay, Implied", function() {
		var source = [
			".org $600",
			"tay"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse tsx, Implied", function() {
		var source = [
			".org $600",
			"tsx"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse txa, Implied", function() {
		var source = [
			".org $600",
			"txa"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse txs, Implied", function() {
		var source = [
			".org $600",
			"txs"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse tya, Implied", function() {
		var source = [
			".org $600",
			"tya"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	// ** END Generated Tests

});
