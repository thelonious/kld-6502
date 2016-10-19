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

	it("should parse adc, absolute", function() {
		var source = [
			".org $600",
			"adc $600"
		].join("\n");
		var memory = assemble(source);
		var values = [109,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse adc, absolute x", function() {
		var source = [
			".org $600",
			"adc $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [125,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse adc, absolute y", function() {
		var source = [
			".org $600",
			"adc $600,y"
		].join("\n");
		var memory = assemble(source);
		var values = [121,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse adc, immediate", function() {
		var source = [
			".org $600",
			"adc #$67"
		].join("\n");
		var memory = assemble(source);
		var values = [105,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse adc, indirect x", function() {
		var source = [
			".org $600",
			"adc ($67,x)"
		].join("\n");
		var memory = assemble(source);
		var values = [97,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse adc, indirect y", function() {
		var source = [
			".org $600",
			"adc ($67),y"
		].join("\n");
		var memory = assemble(source);
		var values = [113,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse adc, zero page", function() {
		var source = [
			".org $600",
			"adc $67"
		].join("\n");
		var memory = assemble(source);
		var values = [101,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse adc, zero page x", function() {
		var source = [
			".org $600",
			"adc $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [117,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse and, absolute", function() {
		var source = [
			".org $600",
			"and $600"
		].join("\n");
		var memory = assemble(source);
		var values = [45,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse and, absolute x", function() {
		var source = [
			".org $600",
			"and $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [61,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse and, absolute y", function() {
		var source = [
			".org $600",
			"and $600,y"
		].join("\n");
		var memory = assemble(source);
		var values = [57,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse and, immediate", function() {
		var source = [
			".org $600",
			"and #$67"
		].join("\n");
		var memory = assemble(source);
		var values = [41,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse and, indirect x", function() {
		var source = [
			".org $600",
			"and ($67,x)"
		].join("\n");
		var memory = assemble(source);
		var values = [33,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse and, indirect y", function() {
		var source = [
			".org $600",
			"and ($67),y"
		].join("\n");
		var memory = assemble(source);
		var values = [49,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse and, zero page", function() {
		var source = [
			".org $600",
			"and $67"
		].join("\n");
		var memory = assemble(source);
		var values = [37,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse and, zero page x", function() {
		var source = [
			".org $600",
			"and $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [53,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse asl, absolute", function() {
		var source = [
			".org $600",
			"asl $600"
		].join("\n");
		var memory = assemble(source);
		var values = [14,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse asl, absolute x", function() {
		var source = [
			".org $600",
			"asl $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [30,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse asl, accumulator", function() {
		var source = [
			".org $600",
			"asl a"
		].join("\n");
		var memory = assemble(source);
		var values = [10];

		assertMemory(memory, values, 0x600);
	});

	it("should parse asl, zero page", function() {
		var source = [
			".org $600",
			"asl $67"
		].join("\n");
		var memory = assemble(source);
		var values = [6,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse asl, zero page x", function() {
		var source = [
			".org $600",
			"asl $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [22,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse bcc, relative", function() {
		var source = [
			".org $600",
			"bcc $610"
		].join("\n");
		var memory = assemble(source);
		var values = [144,14];

		assertMemory(memory, values, 0x600);
	});

	it("should parse bcs, relative", function() {
		var source = [
			".org $600",
			"bcs $610"
		].join("\n");
		var memory = assemble(source);
		var values = [176,14];

		assertMemory(memory, values, 0x600);
	});

	it("should parse beq, relative", function() {
		var source = [
			".org $600",
			"beq $610"
		].join("\n");
		var memory = assemble(source);
		var values = [240,14];

		assertMemory(memory, values, 0x600);
	});

	it("should parse bit, absolute", function() {
		var source = [
			".org $600",
			"bit $600"
		].join("\n");
		var memory = assemble(source);
		var values = [44,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse bit, zero page", function() {
		var source = [
			".org $600",
			"bit $67"
		].join("\n");
		var memory = assemble(source);
		var values = [36,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse bmi, relative", function() {
		var source = [
			".org $600",
			"bmi $610"
		].join("\n");
		var memory = assemble(source);
		var values = [48,14];

		assertMemory(memory, values, 0x600);
	});

	it("should parse bne, relative", function() {
		var source = [
			".org $600",
			"bne $610"
		].join("\n");
		var memory = assemble(source);
		var values = [208,14];

		assertMemory(memory, values, 0x600);
	});

	it("should parse bpl, relative", function() {
		var source = [
			".org $600",
			"bpl $610"
		].join("\n");
		var memory = assemble(source);
		var values = [16,14];

		assertMemory(memory, values, 0x600);
	});

	it("should parse brk, implied", function() {
		var source = [
			".org $600",
			"brk"
		].join("\n");
		var memory = assemble(source);
		var values = [0];

		assertMemory(memory, values, 0x600);
	});

	it("should parse bvc, relative", function() {
		var source = [
			".org $600",
			"bvc $610"
		].join("\n");
		var memory = assemble(source);
		var values = [80,14];

		assertMemory(memory, values, 0x600);
	});

	it("should parse bvs, relative", function() {
		var source = [
			".org $600",
			"bvs $610"
		].join("\n");
		var memory = assemble(source);
		var values = [112,14];

		assertMemory(memory, values, 0x600);
	});

	it("should parse clc, implied", function() {
		var source = [
			".org $600",
			"clc"
		].join("\n");
		var memory = assemble(source);
		var values = [24];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cld, implied", function() {
		var source = [
			".org $600",
			"cld"
		].join("\n");
		var memory = assemble(source);
		var values = [216];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cli, implied", function() {
		var source = [
			".org $600",
			"cli"
		].join("\n");
		var memory = assemble(source);
		var values = [88];

		assertMemory(memory, values, 0x600);
	});

	it("should parse clv, implied", function() {
		var source = [
			".org $600",
			"clv"
		].join("\n");
		var memory = assemble(source);
		var values = [184];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cmp, absolute", function() {
		var source = [
			".org $600",
			"cmp $600"
		].join("\n");
		var memory = assemble(source);
		var values = [205,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cmp, absolute x", function() {
		var source = [
			".org $600",
			"cmp $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [221,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cmp, absolute y", function() {
		var source = [
			".org $600",
			"cmp $600,y"
		].join("\n");
		var memory = assemble(source);
		var values = [217,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cmp, immediate", function() {
		var source = [
			".org $600",
			"cmp #$67"
		].join("\n");
		var memory = assemble(source);
		var values = [201,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cmp, indirect x", function() {
		var source = [
			".org $600",
			"cmp ($67,x)"
		].join("\n");
		var memory = assemble(source);
		var values = [193,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cmp, indirect y", function() {
		var source = [
			".org $600",
			"cmp ($67),y"
		].join("\n");
		var memory = assemble(source);
		var values = [209,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cmp, zero page", function() {
		var source = [
			".org $600",
			"cmp $67"
		].join("\n");
		var memory = assemble(source);
		var values = [197,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cmp, zero page x", function() {
		var source = [
			".org $600",
			"cmp $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [213,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cpx, absolute", function() {
		var source = [
			".org $600",
			"cpx $600"
		].join("\n");
		var memory = assemble(source);
		var values = [236,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cpx, immediate", function() {
		var source = [
			".org $600",
			"cpx #$67"
		].join("\n");
		var memory = assemble(source);
		var values = [224,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cpx, zero page", function() {
		var source = [
			".org $600",
			"cpx $67"
		].join("\n");
		var memory = assemble(source);
		var values = [228,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cpy, absolute", function() {
		var source = [
			".org $600",
			"cpy $600"
		].join("\n");
		var memory = assemble(source);
		var values = [204,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cpy, immediate", function() {
		var source = [
			".org $600",
			"cpy #$67"
		].join("\n");
		var memory = assemble(source);
		var values = [192,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse cpy, zero page", function() {
		var source = [
			".org $600",
			"cpy $67"
		].join("\n");
		var memory = assemble(source);
		var values = [196,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse dec, absolute", function() {
		var source = [
			".org $600",
			"dec $600"
		].join("\n");
		var memory = assemble(source);
		var values = [206,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse dec, absolute x", function() {
		var source = [
			".org $600",
			"dec $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [222,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse dec, zero page", function() {
		var source = [
			".org $600",
			"dec $67"
		].join("\n");
		var memory = assemble(source);
		var values = [198,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse dec, zero page x", function() {
		var source = [
			".org $600",
			"dec $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [214,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse dex, implied", function() {
		var source = [
			".org $600",
			"dex"
		].join("\n");
		var memory = assemble(source);
		var values = [202];

		assertMemory(memory, values, 0x600);
	});

	it("should parse dey, implied", function() {
		var source = [
			".org $600",
			"dey"
		].join("\n");
		var memory = assemble(source);
		var values = [136];

		assertMemory(memory, values, 0x600);
	});

	it("should parse eor, absolute", function() {
		var source = [
			".org $600",
			"eor $600"
		].join("\n");
		var memory = assemble(source);
		var values = [77,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse eor, absolute x", function() {
		var source = [
			".org $600",
			"eor $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [93,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse eor, absolute y", function() {
		var source = [
			".org $600",
			"eor $600,y"
		].join("\n");
		var memory = assemble(source);
		var values = [89,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse eor, immediate", function() {
		var source = [
			".org $600",
			"eor #$67"
		].join("\n");
		var memory = assemble(source);
		var values = [73,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse eor, indirect x", function() {
		var source = [
			".org $600",
			"eor ($67,x)"
		].join("\n");
		var memory = assemble(source);
		var values = [65,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse eor, indirect y", function() {
		var source = [
			".org $600",
			"eor ($67),y"
		].join("\n");
		var memory = assemble(source);
		var values = [81,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse eor, zero page", function() {
		var source = [
			".org $600",
			"eor $67"
		].join("\n");
		var memory = assemble(source);
		var values = [69,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse eor, zero page x", function() {
		var source = [
			".org $600",
			"eor $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [85,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse inc, absolute", function() {
		var source = [
			".org $600",
			"inc $600"
		].join("\n");
		var memory = assemble(source);
		var values = [238,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse inc, absolute x", function() {
		var source = [
			".org $600",
			"inc $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [254,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse inc, zero page", function() {
		var source = [
			".org $600",
			"inc $67"
		].join("\n");
		var memory = assemble(source);
		var values = [230,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse inc, zero page x", function() {
		var source = [
			".org $600",
			"inc $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [246,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse inx, implied", function() {
		var source = [
			".org $600",
			"inx"
		].join("\n");
		var memory = assemble(source);
		var values = [232];

		assertMemory(memory, values, 0x600);
	});

	it("should parse iny, implied", function() {
		var source = [
			".org $600",
			"iny"
		].join("\n");
		var memory = assemble(source);
		var values = [200];

		assertMemory(memory, values, 0x600);
	});

	it("should parse jmp, absolute", function() {
		var source = [
			".org $600",
			"jmp $600"
		].join("\n");
		var memory = assemble(source);
		var values = [76,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse jmp, indirect", function() {
		var source = [
			".org $600",
			"jmp ($600)"
		].join("\n");
		var memory = assemble(source);
		var values = [108,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse jsr, absolute", function() {
		var source = [
			".org $600",
			"jsr $600"
		].join("\n");
		var memory = assemble(source);
		var values = [32,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse lda, absolute", function() {
		var source = [
			".org $600",
			"lda $600"
		].join("\n");
		var memory = assemble(source);
		var values = [173,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse lda, absolute x", function() {
		var source = [
			".org $600",
			"lda $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [189,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse lda, absolute y", function() {
		var source = [
			".org $600",
			"lda $600,y"
		].join("\n");
		var memory = assemble(source);
		var values = [185,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse lda, immediate", function() {
		var source = [
			".org $600",
			"lda #$67"
		].join("\n");
		var memory = assemble(source);
		var values = [169,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse lda, indirect x", function() {
		var source = [
			".org $600",
			"lda ($67,x)"
		].join("\n");
		var memory = assemble(source);
		var values = [161,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse lda, indirect y", function() {
		var source = [
			".org $600",
			"lda ($67),y"
		].join("\n");
		var memory = assemble(source);
		var values = [177,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse lda, zero page", function() {
		var source = [
			".org $600",
			"lda $67"
		].join("\n");
		var memory = assemble(source);
		var values = [165,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse lda, zero page x", function() {
		var source = [
			".org $600",
			"lda $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [181,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ldx, absolute", function() {
		var source = [
			".org $600",
			"ldx $600"
		].join("\n");
		var memory = assemble(source);
		var values = [174,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ldx, absolute y", function() {
		var source = [
			".org $600",
			"ldx $600,y"
		].join("\n");
		var memory = assemble(source);
		var values = [190,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ldx, immediate", function() {
		var source = [
			".org $600",
			"ldx #$67"
		].join("\n");
		var memory = assemble(source);
		var values = [162,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ldx, zero page", function() {
		var source = [
			".org $600",
			"ldx $67"
		].join("\n");
		var memory = assemble(source);
		var values = [166,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ldx, zero page y", function() {
		var source = [
			".org $600",
			"ldx $67,y"
		].join("\n");
		var memory = assemble(source);
		var values = [182,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ldy, absolute", function() {
		var source = [
			".org $600",
			"ldy $600"
		].join("\n");
		var memory = assemble(source);
		var values = [172,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ldy, absolute x", function() {
		var source = [
			".org $600",
			"ldy $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [188,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ldy, immediate", function() {
		var source = [
			".org $600",
			"ldy #$67"
		].join("\n");
		var memory = assemble(source);
		var values = [160,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ldy, zero page", function() {
		var source = [
			".org $600",
			"ldy $67"
		].join("\n");
		var memory = assemble(source);
		var values = [164,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ldy, zero page x", function() {
		var source = [
			".org $600",
			"ldy $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [180,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse lsr, absolute", function() {
		var source = [
			".org $600",
			"lsr $600"
		].join("\n");
		var memory = assemble(source);
		var values = [78,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse lsr, absolute x", function() {
		var source = [
			".org $600",
			"lsr $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [94,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse lsr, accumulator", function() {
		var source = [
			".org $600",
			"lsr a"
		].join("\n");
		var memory = assemble(source);
		var values = [74];

		assertMemory(memory, values, 0x600);
	});

	it("should parse lsr, zero page", function() {
		var source = [
			".org $600",
			"lsr $67"
		].join("\n");
		var memory = assemble(source);
		var values = [70,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse lsr, zero page x", function() {
		var source = [
			".org $600",
			"lsr $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [86,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse nop, implied", function() {
		var source = [
			".org $600",
			"nop"
		].join("\n");
		var memory = assemble(source);
		var values = [234];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ora, absolute", function() {
		var source = [
			".org $600",
			"ora $600"
		].join("\n");
		var memory = assemble(source);
		var values = [13,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ora, absolute x", function() {
		var source = [
			".org $600",
			"ora $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [29,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ora, absolute y", function() {
		var source = [
			".org $600",
			"ora $600,y"
		].join("\n");
		var memory = assemble(source);
		var values = [25,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ora, immediate", function() {
		var source = [
			".org $600",
			"ora #$67"
		].join("\n");
		var memory = assemble(source);
		var values = [9,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ora, indirect x", function() {
		var source = [
			".org $600",
			"ora ($67,x)"
		].join("\n");
		var memory = assemble(source);
		var values = [1,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ora, indirect y", function() {
		var source = [
			".org $600",
			"ora ($67),y"
		].join("\n");
		var memory = assemble(source);
		var values = [17,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ora, zero page", function() {
		var source = [
			".org $600",
			"ora $67"
		].join("\n");
		var memory = assemble(source);
		var values = [5,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ora, zero page x", function() {
		var source = [
			".org $600",
			"ora $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [21,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse pha, implied", function() {
		var source = [
			".org $600",
			"pha"
		].join("\n");
		var memory = assemble(source);
		var values = [72];

		assertMemory(memory, values, 0x600);
	});

	it("should parse php, implied", function() {
		var source = [
			".org $600",
			"php"
		].join("\n");
		var memory = assemble(source);
		var values = [8];

		assertMemory(memory, values, 0x600);
	});

	it("should parse pla, implied", function() {
		var source = [
			".org $600",
			"pla"
		].join("\n");
		var memory = assemble(source);
		var values = [104];

		assertMemory(memory, values, 0x600);
	});

	it("should parse plp, implied", function() {
		var source = [
			".org $600",
			"plp"
		].join("\n");
		var memory = assemble(source);
		var values = [40];

		assertMemory(memory, values, 0x600);
	});

	it("should parse rol, absolute", function() {
		var source = [
			".org $600",
			"rol $600"
		].join("\n");
		var memory = assemble(source);
		var values = [46,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse rol, absolute x", function() {
		var source = [
			".org $600",
			"rol $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [62,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse rol, accumulator", function() {
		var source = [
			".org $600",
			"rol a"
		].join("\n");
		var memory = assemble(source);
		var values = [42];

		assertMemory(memory, values, 0x600);
	});

	it("should parse rol, zero page", function() {
		var source = [
			".org $600",
			"rol $67"
		].join("\n");
		var memory = assemble(source);
		var values = [38,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse rol, zero page x", function() {
		var source = [
			".org $600",
			"rol $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [54,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ror, absolute", function() {
		var source = [
			".org $600",
			"ror $600"
		].join("\n");
		var memory = assemble(source);
		var values = [110,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ror, absolute x", function() {
		var source = [
			".org $600",
			"ror $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [126,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ror, accumulator", function() {
		var source = [
			".org $600",
			"ror a"
		].join("\n");
		var memory = assemble(source);
		var values = [106];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ror, zero page", function() {
		var source = [
			".org $600",
			"ror $67"
		].join("\n");
		var memory = assemble(source);
		var values = [102,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse ror, zero page x", function() {
		var source = [
			".org $600",
			"ror $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [118,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse rti, implied", function() {
		var source = [
			".org $600",
			"rti"
		].join("\n");
		var memory = assemble(source);
		var values = [64];

		assertMemory(memory, values, 0x600);
	});

	it("should parse rts, implied", function() {
		var source = [
			".org $600",
			"rts"
		].join("\n");
		var memory = assemble(source);
		var values = [96];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sbc, absolute", function() {
		var source = [
			".org $600",
			"sbc $600"
		].join("\n");
		var memory = assemble(source);
		var values = [237,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sbc, absolute x", function() {
		var source = [
			".org $600",
			"sbc $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [253,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sbc, absolute y", function() {
		var source = [
			".org $600",
			"sbc $600,y"
		].join("\n");
		var memory = assemble(source);
		var values = [249,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sbc, immediate", function() {
		var source = [
			".org $600",
			"sbc #$67"
		].join("\n");
		var memory = assemble(source);
		var values = [233,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sbc, indirect x", function() {
		var source = [
			".org $600",
			"sbc ($67,x)"
		].join("\n");
		var memory = assemble(source);
		var values = [225,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sbc, indirect y", function() {
		var source = [
			".org $600",
			"sbc ($67),y"
		].join("\n");
		var memory = assemble(source);
		var values = [241,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sbc, zero page", function() {
		var source = [
			".org $600",
			"sbc $67"
		].join("\n");
		var memory = assemble(source);
		var values = [229,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sbc, zero page x", function() {
		var source = [
			".org $600",
			"sbc $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [245,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sec, implied", function() {
		var source = [
			".org $600",
			"sec"
		].join("\n");
		var memory = assemble(source);
		var values = [56];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sed, implied", function() {
		var source = [
			".org $600",
			"sed"
		].join("\n");
		var memory = assemble(source);
		var values = [248];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sei, implied", function() {
		var source = [
			".org $600",
			"sei"
		].join("\n");
		var memory = assemble(source);
		var values = [120];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sta, absolute", function() {
		var source = [
			".org $600",
			"sta $600"
		].join("\n");
		var memory = assemble(source);
		var values = [141,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sta, absolute x", function() {
		var source = [
			".org $600",
			"sta $600,x"
		].join("\n");
		var memory = assemble(source);
		var values = [157,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sta, absolute y", function() {
		var source = [
			".org $600",
			"sta $600,y"
		].join("\n");
		var memory = assemble(source);
		var values = [153,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sta, indirect x", function() {
		var source = [
			".org $600",
			"sta ($67,x)"
		].join("\n");
		var memory = assemble(source);
		var values = [129,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sta, indirect y", function() {
		var source = [
			".org $600",
			"sta ($67),y"
		].join("\n");
		var memory = assemble(source);
		var values = [145,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sta, zero page", function() {
		var source = [
			".org $600",
			"sta $67"
		].join("\n");
		var memory = assemble(source);
		var values = [133,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sta, zero page x", function() {
		var source = [
			".org $600",
			"sta $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [149,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse stx, absolute", function() {
		var source = [
			".org $600",
			"stx $600"
		].join("\n");
		var memory = assemble(source);
		var values = [142,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse stx, zero page", function() {
		var source = [
			".org $600",
			"stx $67"
		].join("\n");
		var memory = assemble(source);
		var values = [134,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse stx, zero page y", function() {
		var source = [
			".org $600",
			"stx $67,y"
		].join("\n");
		var memory = assemble(source);
		var values = [150,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sty, absolute", function() {
		var source = [
			".org $600",
			"sty $600"
		].join("\n");
		var memory = assemble(source);
		var values = [140,0,6];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sty, zero page", function() {
		var source = [
			".org $600",
			"sty $67"
		].join("\n");
		var memory = assemble(source);
		var values = [132,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse sty, zero page x", function() {
		var source = [
			".org $600",
			"sty $67,x"
		].join("\n");
		var memory = assemble(source);
		var values = [148,103];

		assertMemory(memory, values, 0x600);
	});

	it("should parse tax, implied", function() {
		var source = [
			".org $600",
			"tax"
		].join("\n");
		var memory = assemble(source);
		var values = [170];

		assertMemory(memory, values, 0x600);
	});

	it("should parse tay, implied", function() {
		var source = [
			".org $600",
			"tay"
		].join("\n");
		var memory = assemble(source);
		var values = [168];

		assertMemory(memory, values, 0x600);
	});

	it("should parse tsx, implied", function() {
		var source = [
			".org $600",
			"tsx"
		].join("\n");
		var memory = assemble(source);
		var values = [186];

		assertMemory(memory, values, 0x600);
	});

	it("should parse txa, implied", function() {
		var source = [
			".org $600",
			"txa"
		].join("\n");
		var memory = assemble(source);
		var values = [138];

		assertMemory(memory, values, 0x600);
	});

	it("should parse txs, implied", function() {
		var source = [
			".org $600",
			"txs"
		].join("\n");
		var memory = assemble(source);
		var values = [154];

		assertMemory(memory, values, 0x600);
	});

	it("should parse tya, implied", function() {
		var source = [
			".org $600",
			"tya"
		].join("\n");
		var memory = assemble(source);
		var values = [152];

		assertMemory(memory, values, 0x600);
	});

});

