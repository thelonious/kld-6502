let format = require('kld-text-utils').format,
	AM     = require('./AddressModes');

let Mnemonic = [
	"adc", "and", "asl", "bcc", "bcs", "beq", "bit", "bmi",
	"bne", "bpl", "brk", "bvc", "bvs", "clc", "cld", "cli",
	"clv", "cmp", "cpx", "cpy", "dec", "dex", "dey", "eor",
	"inc", "inx", "iny", "jmp", "jsr", "lda", "ldx", "ldy",
	"lsr", "nop", "ora", "pha", "php", "pla", "plp", "rol",
	"ror", "rti", "rts", "sbc", "sec", "sed", "sei", "sta",
	"stx", "sty", "tax", "tay", "tsx", "txa", "txs", "tya",
	".db"
];

let MnemonicIndex = [
	10, 34, 56, 56, 56, 34,  2, 56,
	36, 34,  2, 56, 56, 34,  2, 56,
	 9, 34, 56, 56, 56, 34,  2, 56,
	13, 34, 56, 56, 56, 34,  2, 56,
	28,  1, 56, 56,  6,  1, 39, 56,
	38,  1, 39, 56,  6,  1, 39, 56,
	 7,  1, 56, 56, 56,  1, 39, 56,
	44,  1, 56, 56, 56,  1, 39, 56,
	41, 23, 56, 56, 56, 23, 32, 56,
	35, 23, 32, 56, 27, 23, 32, 56,
	11, 23, 56, 56, 56, 23, 32, 56,
	15, 23, 56, 56, 56, 23, 32, 56,
	42,  0, 56, 56, 56,  0, 40, 56,
	37,  0, 40, 56, 27,  0, 40, 56,
	12,  0, 56, 56, 56,  0, 40, 56,
	46,  0, 56, 56, 56,  0, 40, 56,
	56, 47, 56, 56, 49, 47, 48, 56,
	22, 56, 53, 56, 49, 47, 48, 56,
	 3, 47, 56, 56, 49, 47, 48, 56,
	55, 47, 54, 56, 56, 47, 56, 56,
	31, 29, 30, 56, 31, 29, 30, 56,
	51, 29, 50, 56, 31, 29, 30, 56,
	 4, 29, 56, 56, 31, 29, 30, 56,
	16, 29, 52, 56, 31, 29, 30, 56,
	19, 17, 56, 56, 19, 17, 20, 56,
	26, 17, 21, 56, 19, 17, 20, 56,
	 8, 17, 56, 56, 56, 17, 20, 56,
	14, 17, 56, 56, 56, 17, 20, 56,
	18, 43, 56, 56, 18, 43, 24, 56,
	25, 43, 33, 56, 18, 43, 24, 56,
	 5, 43, 56, 56, 56, 43, 24, 56,
	45, 43, 56, 56, 56, 43, 24, 56
];

var AddressModeIndex = [
	AM.Implied,   AM.IndirectX, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.ZeroPage,  AM.ZeroPage,  AM.Unknown,
	AM.Implied,   AM.Immediate, AM.Accumulator, AM.Unknown, AM.Unknown,   AM.Absolute,  AM.Absolute,  AM.Unknown,
	AM.Relative,  AM.IndirectY, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.ZeroPageX, AM.ZeroPageX, AM.Unknown,
	AM.Implied,   AM.AbsoluteY, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.AbsoluteX, AM.AbsoluteX, AM.Unknown,
	AM.Absolute,  AM.IndirectX, AM.Unknown,     AM.Unknown, AM.ZeroPage,  AM.ZeroPage,  AM.ZeroPage,  AM.Unknown,
	AM.Implied,   AM.Immediate, AM.Accumulator, AM.Unknown, AM.Absolute,  AM.Absolute,  AM.Absolute,  AM.Unknown,
	AM.Relative,  AM.IndirectY, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.ZeroPageX, AM.ZeroPageX, AM.Unknown,
	AM.Implied,   AM.AbsoluteY, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.AbsoluteX, AM.AbsoluteX, AM.Unknown,
	AM.Implied,   AM.IndirectX, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.ZeroPage,  AM.ZeroPage,  AM.Unknown,
	AM.Implied,   AM.Immediate, AM.Accumulator, AM.Unknown, AM.Absolute,  AM.Absolute,  AM.Absolute,  AM.Unknown,
	AM.Relative,  AM.IndirectY, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.ZeroPageX, AM.ZeroPageX, AM.Unknown,
	AM.Implied,   AM.AbsoluteY, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.AbsoluteX, AM.AbsoluteX, AM.Unknown,
	AM.Implied,   AM.IndirectX, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.ZeroPage,  AM.ZeroPage,  AM.Unknown,
	AM.Implied,   AM.Immediate, AM.Accumulator, AM.Unknown, AM.Indirect,  AM.Absolute,  AM.Absolute,  AM.Unknown,
	AM.Relative,  AM.IndirectY, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.ZeroPageX, AM.ZeroPageX, AM.Unknown,
	AM.Implied,   AM.AbsoluteY, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.AbsoluteX, AM.AbsoluteX, AM.Unknown,
	AM.Unknown,   AM.IndirectX, AM.Unknown,     AM.Unknown, AM.ZeroPage,  AM.ZeroPage,  AM.ZeroPage,  AM.Unknown,
	AM.Implied,   AM.Unknown,   AM.Implied,     AM.Unknown, AM.Absolute,  AM.Absolute,  AM.Absolute,  AM.Unknown,
	AM.Relative,  AM.IndirectY, AM.Unknown,     AM.Unknown, AM.ZeroPageX, AM.ZeroPageX, AM.ZeroPageY, AM.Unknown,
	AM.Implied,   AM.AbsoluteY, AM.Implied,     AM.Unknown, AM.Unknown,   AM.AbsoluteX, AM.Unknown,   AM.Unknown,
	AM.Immediate, AM.IndirectX, AM.Immediate,   AM.Unknown, AM.ZeroPage,  AM.ZeroPage,  AM.ZeroPage,  AM.Unknown,
	AM.Implied,   AM.Immediate, AM.Implied,     AM.Unknown, AM.Absolute,  AM.Absolute,  AM.Absolute,  AM.Unknown,
	AM.Relative,  AM.IndirectY, AM.Unknown,     AM.Unknown, AM.ZeroPageX, AM.ZeroPageX, AM.ZeroPageY, AM.Unknown,
	AM.Implied,   AM.AbsoluteY, AM.Implied,     AM.Unknown, AM.AbsoluteX, AM.AbsoluteX, AM.AbsoluteY, AM.Unknown,
	AM.Immediate, AM.IndirectX, AM.Unknown,     AM.Unknown, AM.ZeroPage,  AM.ZeroPage,  AM.ZeroPage,  AM.Unknown,
	AM.Implied,   AM.Immediate, AM.Implied,     AM.Unknown, AM.Absolute,  AM.Absolute,  AM.Absolute,  AM.Unknown,
	AM.Relative,  AM.IndirectY, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.ZeroPageX, AM.ZeroPageX, AM.Unknown,
	AM.Implied,   AM.AbsoluteY, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.AbsoluteX, AM.AbsoluteX, AM.Unknown,
	AM.Immediate, AM.IndirectX, AM.Unknown,     AM.Unknown, AM.ZeroPage,  AM.ZeroPage,  AM.ZeroPage,  AM.Unknown,
	AM.Implied,   AM.Immediate, AM.Implied,     AM.Unknown, AM.Absolute,  AM.Absolute,  AM.Absolute,  AM.Unknown,
	AM.Relative,  AM.IndirectY, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.ZeroPageX, AM.ZeroPageX, AM.Unknown,
	AM.Implied,   AM.AbsoluteY, AM.Unknown,     AM.Unknown, AM.Unknown,   AM.AbsoluteX, AM.AbsoluteX, AM.Unknown
];

class Disassembler {
	constructor() {

	}

	disassemble(memory, start, end) {
		start &= 0xFFFF;
		end &= 0xFFFF;

		var result = [];
		var address = start;

		while (address <= end) {
			var lo, hi, addr;

			var opcode = memory[address++] || 0;
			var current = {
				"address": address - 1,
				"bytes": [opcode],
				"mnemonic": Mnemonic[MnemonicIndex[opcode]],
				"operand": ""
			};

			switch(AddressModeIndex[opcode]) {
				case AM.Absolute:
					lo = memory[address++];
					hi = memory[address++];

					current.bytes.push(lo, hi);
					current.operand = format("${0:X4}", lo + 256 * hi);
					break;

				case AM.AbsoluteX:
					lo = memory[address++];
					hi = memory[address++];

					current.bytes.push(lo, hi);
					current.operand = format("${0:X4},x", lo + 256 * hi);
					break;

				case AM.AbsoluteY:
					lo = memory[address++];
					hi = memory[address++];

					current.bytes.push(lo, hi);
					current.operand = format("${0:X4},y", lo + 256 * hi);
					break;

				case AM.Accumulator:
					current.operand = "a";
					break;

				case AM.Immediate:
					lo = memory[address++];

					current.bytes.push(lo);
					current.operand = format("#${0:X2}", lo);
					break;

				case AM.Implied:
					break;

				case AM.Indirect:
					lo = memory[address++];
					hi = memory[address++];

					current.bytes.push(lo, hi);
					current.operand = format("(${0:X4})", lo + 256 * hi);
					break;

				case AM.IndirectX:
					lo = memory[address++];

					current.bytes.push(lo);
					current.operand = format("(${0:X2},x)", lo);
					break;

				case AM.IndirectY:
					lo = memory[address++];

					current.bytes.push(lo);
					current.operand = format("(${0:X2}),y", lo);
					break;

				case AM.Relative:
					lo = memory[address++];
					addr = address + ( lo < 128 ? lo : lo-256 );

					current.bytes.push(lo);
					current.operand = format("${0:X4}", addr);
					break;

				case AM.ZeroPage:
					lo = memory[address++];

					current.bytes.push(lo);
					current.operand = format("${0:X2}", lo);
					break;

				case AM.ZeroPageX:
					lo = memory[address++];

					current.bytes.push(lo);
					current.operand = format("${0:X2},x", lo);
					break;

				case AM.ZeroPageY:
					lo = memory[address++];

					current.bytes.push(lo);
					current.operand = format("${0:X2},y", lo);
					break;

				case AM.Unknown:
					current.operand = format("{0:X2}", opcode);
					break;

				default:
					throw Error("Unrecognized Address Mode " + AddressModeIndex[opcode] + " for opcode " + opcode);
			}

			result.push(current);
		}

		return result;
	}
}

module.exports = Disassembler;
