// WARNING: This file is generated. Do not edit by hand

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

describe("Assembler - generated tests", function() {

	it("should parse should parse adc, absolute", function() {
		var source = [
			".org $600",
			"adc $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, absolute x", function() {
		var source = [
			".org $600",
			"adc $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, absolute y", function() {
		var source = [
			".org $600",
			"adc $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, immediate", function() {
		var source = [
			".org $600",
			"adc #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, indirext x", function() {
		var source = [
			".org $600",
			"adc ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, indirect y", function() {
		var source = [
			".org $600",
			"adc ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, zero page", function() {
		var source = [
			".org $600",
			"adc $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse adc, zero page x", function() {
		var source = [
			".org $600",
			"adc $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, absolute", function() {
		var source = [
			".org $600",
			"and $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, absolute x", function() {
		var source = [
			".org $600",
			"and $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, absolute y", function() {
		var source = [
			".org $600",
			"and $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, immediate", function() {
		var source = [
			".org $600",
			"and #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, indirext x", function() {
		var source = [
			".org $600",
			"and ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, indirect y", function() {
		var source = [
			".org $600",
			"and ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, zero page", function() {
		var source = [
			".org $600",
			"and $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse and, zero page x", function() {
		var source = [
			".org $600",
			"and $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse asl, absolute", function() {
		var source = [
			".org $600",
			"asl $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse asl, absolute x", function() {
		var source = [
			".org $600",
			"asl $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse asl, accumulator", function() {
		var source = [
			".org $600",
			"asl a"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse asl, zero page", function() {
		var source = [
			".org $600",
			"asl $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse asl, zero page x", function() {
		var source = [
			".org $600",
			"asl $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bcc, relative", function() {
		var source = [
			".org $600",
			"bcc $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bcs, relative", function() {
		var source = [
			".org $600",
			"bcs $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse beq, relative", function() {
		var source = [
			".org $600",
			"beq $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bit, absolute", function() {
		var source = [
			".org $600",
			"bit $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bit, zero page", function() {
		var source = [
			".org $600",
			"bit $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bmi, relative", function() {
		var source = [
			".org $600",
			"bmi $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bne, relative", function() {
		var source = [
			".org $600",
			"bne $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bpl, relative", function() {
		var source = [
			".org $600",
			"bpl $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse brk, implied", function() {
		var source = [
			".org $600",
			"brk"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bvc, relative", function() {
		var source = [
			".org $600",
			"bvc $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse bvs, relative", function() {
		var source = [
			".org $600",
			"bvs $610"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse clc, implied", function() {
		var source = [
			".org $600",
			"clc"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cld, implied", function() {
		var source = [
			".org $600",
			"cld"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cli, implied", function() {
		var source = [
			".org $600",
			"cli"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse clv, implied", function() {
		var source = [
			".org $600",
			"clv"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, absolute", function() {
		var source = [
			".org $600",
			"cmp $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, absolute x", function() {
		var source = [
			".org $600",
			"cmp $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, absolute y", function() {
		var source = [
			".org $600",
			"cmp $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, immediate", function() {
		var source = [
			".org $600",
			"cmp #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, indirext x", function() {
		var source = [
			".org $600",
			"cmp ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, indirect y", function() {
		var source = [
			".org $600",
			"cmp ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, zero page", function() {
		var source = [
			".org $600",
			"cmp $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cmp, zero page x", function() {
		var source = [
			".org $600",
			"cmp $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cpx, absolute", function() {
		var source = [
			".org $600",
			"cpx $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cpx, immediate", function() {
		var source = [
			".org $600",
			"cpx #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cpx, zero page", function() {
		var source = [
			".org $600",
			"cpx $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cpy, absolute", function() {
		var source = [
			".org $600",
			"cpy $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cpy, immediate", function() {
		var source = [
			".org $600",
			"cpy #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse cpy, zero page", function() {
		var source = [
			".org $600",
			"cpy $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse dec, absolute", function() {
		var source = [
			".org $600",
			"dec $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse dec, absolute x", function() {
		var source = [
			".org $600",
			"dec $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse dec, zero page", function() {
		var source = [
			".org $600",
			"dec $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse dec, zero page x", function() {
		var source = [
			".org $600",
			"dec $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse dex, implied", function() {
		var source = [
			".org $600",
			"dex"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse dey, implied", function() {
		var source = [
			".org $600",
			"dey"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, absolute", function() {
		var source = [
			".org $600",
			"eor $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, absolute x", function() {
		var source = [
			".org $600",
			"eor $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, absolute y", function() {
		var source = [
			".org $600",
			"eor $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, immediate", function() {
		var source = [
			".org $600",
			"eor #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, indirext x", function() {
		var source = [
			".org $600",
			"eor ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, indirect y", function() {
		var source = [
			".org $600",
			"eor ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, zero page", function() {
		var source = [
			".org $600",
			"eor $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse eor, zero page x", function() {
		var source = [
			".org $600",
			"eor $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse inc, absolute", function() {
		var source = [
			".org $600",
			"inc $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse inc, absolute x", function() {
		var source = [
			".org $600",
			"inc $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse inc, zero page", function() {
		var source = [
			".org $600",
			"inc $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse inc, zero page x", function() {
		var source = [
			".org $600",
			"inc $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse inx, implied", function() {
		var source = [
			".org $600",
			"inx"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse iny, implied", function() {
		var source = [
			".org $600",
			"iny"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse jmp, absolute", function() {
		var source = [
			".org $600",
			"jmp $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse jmp, indirect", function() {
		var source = [
			".org $600",
			"jmp ($600)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse jsr, absolute", function() {
		var source = [
			".org $600",
			"jsr $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, absolute", function() {
		var source = [
			".org $600",
			"lda $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, absolute x", function() {
		var source = [
			".org $600",
			"lda $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, absolute y", function() {
		var source = [
			".org $600",
			"lda $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, immediate", function() {
		var source = [
			".org $600",
			"lda #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, indirext x", function() {
		var source = [
			".org $600",
			"lda ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, indirect y", function() {
		var source = [
			".org $600",
			"lda ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, zero page", function() {
		var source = [
			".org $600",
			"lda $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lda, zero page x", function() {
		var source = [
			".org $600",
			"lda $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldx, absolute", function() {
		var source = [
			".org $600",
			"ldx $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldx, absolute y", function() {
		var source = [
			".org $600",
			"ldx $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldx, immediate", function() {
		var source = [
			".org $600",
			"ldx #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldx, zero page", function() {
		var source = [
			".org $600",
			"ldx $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldx, zero page y", function() {
		var source = [
			".org $600",
			"ldx $67,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldy, absolute", function() {
		var source = [
			".org $600",
			"ldy $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldy, absolute x", function() {
		var source = [
			".org $600",
			"ldy $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldy, immediate", function() {
		var source = [
			".org $600",
			"ldy #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldy, zero page", function() {
		var source = [
			".org $600",
			"ldy $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ldy, zero page x", function() {
		var source = [
			".org $600",
			"ldy $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lsr, absolute", function() {
		var source = [
			".org $600",
			"lsr $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lsr, absolute x", function() {
		var source = [
			".org $600",
			"lsr $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lsr, accumulator", function() {
		var source = [
			".org $600",
			"lsr a"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lsr, zero page", function() {
		var source = [
			".org $600",
			"lsr $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse lsr, zero page x", function() {
		var source = [
			".org $600",
			"lsr $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse nop, implied", function() {
		var source = [
			".org $600",
			"nop"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, absolute", function() {
		var source = [
			".org $600",
			"ora $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, absolute x", function() {
		var source = [
			".org $600",
			"ora $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, absolute y", function() {
		var source = [
			".org $600",
			"ora $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, immediate", function() {
		var source = [
			".org $600",
			"ora #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, indirext x", function() {
		var source = [
			".org $600",
			"ora ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, indirect y", function() {
		var source = [
			".org $600",
			"ora ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, zero page", function() {
		var source = [
			".org $600",
			"ora $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ora, zero page x", function() {
		var source = [
			".org $600",
			"ora $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse pha, implied", function() {
		var source = [
			".org $600",
			"pha"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse php, implied", function() {
		var source = [
			".org $600",
			"php"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse pla, implied", function() {
		var source = [
			".org $600",
			"pla"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse plp, implied", function() {
		var source = [
			".org $600",
			"plp"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rol, absolute", function() {
		var source = [
			".org $600",
			"rol $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rol, absolute x", function() {
		var source = [
			".org $600",
			"rol $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rol, accumulator", function() {
		var source = [
			".org $600",
			"rol a"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rol, zero page", function() {
		var source = [
			".org $600",
			"rol $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rol, zero page x", function() {
		var source = [
			".org $600",
			"rol $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ror, absolute", function() {
		var source = [
			".org $600",
			"ror $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ror, absolute x", function() {
		var source = [
			".org $600",
			"ror $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ror, accumulator", function() {
		var source = [
			".org $600",
			"ror a"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ror, zero page", function() {
		var source = [
			".org $600",
			"ror $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse ror, zero page x", function() {
		var source = [
			".org $600",
			"ror $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rti, implied", function() {
		var source = [
			".org $600",
			"rti"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse rts, implied", function() {
		var source = [
			".org $600",
			"rts"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, absolute", function() {
		var source = [
			".org $600",
			"sbc $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, absolute x", function() {
		var source = [
			".org $600",
			"sbc $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, absolute y", function() {
		var source = [
			".org $600",
			"sbc $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, immediate", function() {
		var source = [
			".org $600",
			"sbc #$67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, indirext x", function() {
		var source = [
			".org $600",
			"sbc ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, indirect y", function() {
		var source = [
			".org $600",
			"sbc ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, zero page", function() {
		var source = [
			".org $600",
			"sbc $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sbc, zero page x", function() {
		var source = [
			".org $600",
			"sbc $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sec, implied", function() {
		var source = [
			".org $600",
			"sec"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sed, implied", function() {
		var source = [
			".org $600",
			"sed"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sei, implied", function() {
		var source = [
			".org $600",
			"sei"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, absolute", function() {
		var source = [
			".org $600",
			"sta $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, absolute x", function() {
		var source = [
			".org $600",
			"sta $600,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, absolute y", function() {
		var source = [
			".org $600",
			"sta $600,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, indirext x", function() {
		var source = [
			".org $600",
			"sta ($67,x)"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, indirect y", function() {
		var source = [
			".org $600",
			"sta ($67),y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, zero page", function() {
		var source = [
			".org $600",
			"sta $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sta, zero page x", function() {
		var source = [
			".org $600",
			"sta $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse stx, absolute", function() {
		var source = [
			".org $600",
			"stx $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse stx, zero page", function() {
		var source = [
			".org $600",
			"stx $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse stx, zero page y", function() {
		var source = [
			".org $600",
			"stx $67,y"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sty, absolute", function() {
		var source = [
			".org $600",
			"sty $600"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sty, zero page", function() {
		var source = [
			".org $600",
			"sty $67"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse sty, zero page x", function() {
		var source = [
			".org $600",
			"sty $67,x"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse tax, implied", function() {
		var source = [
			".org $600",
			"tax"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse tay, implied", function() {
		var source = [
			".org $600",
			"tay"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse tsx, implied", function() {
		var source = [
			".org $600",
			"tsx"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse txa, implied", function() {
		var source = [
			".org $600",
			"txa"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse txs, implied", function() {
		var source = [
			".org $600",
			"txs"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

	it("should parse should parse tya, implied", function() {
		var source = [
			".org $600",
			"tya"
		].join("\n");
		var memory = assemble(source);

		assert.ok(memory !== undefined);
	});

});

