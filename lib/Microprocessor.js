let C_FLAG = 0x01,
	Z_FLAG = 0x02,
	I_FLAG = 0x04,
	D_FLAG = 0x08;
	B_FLAG = 0x10;
	R_FLAG = 0x20;
	V_FLAG = 0x40;
	N_FLAG = 0x80;

class Microprocessor {
	constructor(memory) {
		this.memory = memory;
		this.a = 0;					// accumulator
		this.x = 0;					// x register
		this.y = 0;					// y register
		this.pc = 0;				// program counter
		this.sp = 0xFF;				// stack pointer
		this.p = Z_FLAG | R_FLAG;	// status register
	}

	// properties
	get registers() {
		var flags = [
			this.signFlag      ? "S" : "s",
			this.overflowFlag  ? "V" : "v",
			"-",
			this.breakFlag     ? "B" : "b",
			this.decimalFlag   ? "D" : "d",
			this.interruptFlag ? "I" : "i",
			this.zeroFlag      ? "Z" : "z",
			this.carryFlag     ? "C" : "c"
		];

		return {
			a: this.a.toString(16),
			x: this.x.toString(16),
			y: this.y.toString(16),
			pc: this.pc.toString(16),
			sp: this.sp.toString(16),
			p: flags.join("")
		};
	}

	// flags

	get signFlag() {
		return (this.p & N_FLAG) == N_FLAG;
	}

	get overflowFlag() {
		return (this.p & V_FLAG) == V_FLAG;
	}

	get breakFlag() {
		return (this.p & B_FLAG) == B_FLAG;
	}

	get decimalFlag() {
		return (this.p & D_FLAG) == D_FLAG;
	}

	get interruptFlag() {
		return (this.p & I_FLAG) == I_FLAG;
	}

	get zeroFlag() {
		return (this.p & Z_FLAG) == Z_FLAG;
	}

	get carryFlag() {
		return (this.p & C_FLAG) == C_FLAG;
	}

	get startVector() {
		return this.memory[0xFFFC] + 256 * this.memory[0xFFFD];
	}

	set startVector(value) {
		value = value & 0xFFFF;

		this.memory[0xFFFC] = value & 0xFF;
		this.memory[0xFFFD] = (value & 0xFF00) >> 8;
	}

	// execution

	warmboot() {
		// init registers
		this.a = 0;
		this.x = 0;
		this.y = 0;
		
		// reset status register
		this.p = Z_FLAG | R_FLAG;
		
		// reset stack pointer
		this.sp = 0xFF;
		
		// reset program counter to reset vector
		this.pc = this.startVector;
	}

	advance() {
		var opcode = this.memory[this.pc++] || 0x00;
		var address = 0;
		
		switch (opcode)
		{
			// ADC - effects SVZC
			case 0x61:	// $61: ADC ($44,X) - Indirect,X
				this.adc(this.memory[this.indirectXAddress()]);
				break;
			case 0x65:	// $65: ADC $44 - Zero Page
				this.adc(this.memory[this.memory[this.pc++]]);
				break;
			case 0x69:	// $69: ADC #$44 - Immediate
				this.adc(this.memory[this.pc++]);
				break;
			case 0x6D:	// $6D: ADC $4400 - Absolute
				this.adc(this.memory[this.absoluteAddress()]);
				break;
			case 0x71:	// $71: ADC ($44),Y - Indirect,Y
				this.adc(this.memory[this.indirectYAddress()]);
				break;
			case 0x75:	// $75: ADC $44,X - Zero Page,X
				this.adc(this.memory[this.memory[this.pc++] + this.x]);
				break;
			case 0x79:	// $79: ADC $4400,Y - Absolute,Y
				this.adc(this.memory[this.absoluteYAddress()]);
				break;
			case 0x7D:	// $7D: ADC $4400,X - Absolute,X
				this.adc(this.memory[this.absoluteXAddress()]);
				break;

			// AND - effects SZ
			case 0x21:	// $21: AND ($44,X) - Indirect,X
				this.setFlags(this.a &= this.memory[this.indirectXAddress()]);
				break;
			case 0x25:	// $25: AND $44 - Zero Page
				this.setFlags(this.a &= this.memory[this.memory[this.pc++]]);
				break;
			case 0x29:	// $29: AND #$44 - Immediate
				this.setFlags(this.a &= this.memory[this.pc++]);
				break;
			case 0x2D:	// $2D: AND $4400 - Absolute
				this.setFlags(this.a &= this.memory[this.absoluteAddress()]);
				break;
			case 0x31:	// $31: AND ($44),Y - Indirect,Y
				this.setFlags(this.a &= this.memory[this.memory[this.pc++] + this.y]);
				break;
			case 0x35:	// $35: AND $44,X - Zero Page,X
				this.setFlags(this.a &= this.memory[this.memory[this.pc++] + this.x]);
				break;
			case 0x39:	// $39: AND $4400,Y - Absolute,Y
				this.setFlags(this.a &= this.memory[this.absoluteYAddress()]);
				break;
			case 0x3D:	// $3D: AND $4400,X - Absolute,X
				this.setFlags(this.a &= this.memory[this.absoluteXAddress()]);
				break;

			// ASL - effects SZC
			case 0x06:	// $06: ASL $44 - Zero Page
				address = this.memory[this.pc++];
				this.memory[address] = this.asl(this.memory[address]);
				break;
			case 0x0A:	// $0A: ASL A - Accumulator
				this.a = this.asl(this.a);
				break;
			case 0x0E:	// $0E: ASL $4400 - Absolute
				address = this.absoluteAddress();
				this.memory[address] = this.asl(this.memory[address]);
				break;
			case 0x16:	// $16: ASL $44,X - Zero Page,X
				address = (uint) (this.memory[this.pc++] + this.x);
				this.memory[address] = this.asl(this.memory[address]);
				break;
			case 0x1E:	// $1E: ASL $4400,X - Absolute,X
				address = this.absoluteXAddress();
				this.memory[address] = this.asl(this.memory[address]);
				break;

			// BCC - effects no status flags
			case 0x90:	// $90: BCC - Relative
				if (this.carryFlag) {
					this.pc++;
				}
				else {
					this.advance_relative(); 
				}
				break;

			// BCS - effects no status flags
			case 0xB0:	// $B0: BCS - Relative
				if (this.carryFlag) {
					this.advance_relative();
				}
				else {
					this.pc++;
				}
				break;

			// BEQ - effects no status flags
			case 0xF0:	// $F0: BEQ - Relative
				if (this.zeroFlag) {
					this.advance_relative();
				}
				else {
					this.pc++;
				}
				break;

			// BIT - effects SVZ
			case 0x24:	// $24: BIT $44 - Zero Page
				this.bit( this.memory[this.pc++] );
				break;
			case 0x2C:	// $2C: BIT $4400 - Absolute
				this.bit( this.memory[this.absoluteAddress()] );
				break;

			// BMI - effects no status flags
			case 0x30:	// $30: BMI - Relative
				if (this.signFlag) {
					this.advance_relative();
				}
				else {
					this.pc++;
				}
				break;

			// BNE - effects no status flags
			case 0xD0:	// $D0: BNE - Relative
				if (this.signFlag) {
					this.pc++;
				}
				else {
					this.advance_relative();
				}
				break;

			// BPL - effects no status flags
			case 0x10:	// $10: BPL - Relative
				if (this.signFlag) {
					this.pc++;
				}
				else {
					this.advance_relative();
				}
				break;

			// BRK - effects B
			case 0x00:	// $00: BRK - Implied
				this.pc++;
				this.pushShort(this.pc);
				this.pushByte(this.p = this.p | B_FLAG);
				this.p = (this.p | I_FLAG) & ~D_FLAG;
				this.pc = this.memory[0xFFFE] + 256 * this.memory[0xFFFF];
				break;

			// BVC - effects no status flags
			case 0x50:	// $50: BVC - Relative
				if (this.overflowFlag) {
					this.pc++;
				}
				else {
					this.advance_relative();
				}
				break;

			// BVS - effects no status flags
			case 0x70:	// $70: BVS - Relative
				if (this.overflowFlag) {
					tihs.advance_relative();
				}
				else {
					this.pc++;
				}
				break;

			// CLC - effects no status flags
			case 0x18:	// $18: CLC - Implied
				this.p = this.p & ~C_FLAG;
				break;

			// CLD - effects no status flags
			case 0xD8:	// $D8: CLD - Implied
				this.p = this.p & ~D_FLAG;
				break;

			// CLI - effects no status flags
			case 0x58:	// $58: CLI - Implied
				this.p = this.p & ~I_FLAG;
				break;

			// CLV - effects no status flags
			case 0xB8:	// $B8: CLV - Implied
				this.p = this.p & ~V_FLAG;
				break;

			// CMP - effects SZC
			case 0xC1:	// $C1: CMP ($44,X) - Indirect,X
				this.cmp(this.a, this.memory[this.indirectXAddress()]);
				break;
			case 0xC5:	// $C5: CMP $44 - Zero Page
				this.cmp(this.a, this.memory[this.memory[this.pc++]]);
				break;
			case 0xC9:	// $C9: CMP #$44 - Immediate
				this.cmp(this.a, this.memory[this.pc++]);
				break;
			case 0xCD:	// $CD: CMP $4400 - Absolute
				this.cmp(this.a, this.memory[this.absoluteAddress()]);
				break;
			case 0xD1:	// $D1: CMP ($44),Y - Indirect,Y
				this.cmp(this.a, this.memory[this.indirectYAddress()]);
				break;
			case 0xD5:	// $D5: CMP $44,X - Zero Page,X
				this.cmp(this.a, this.memory[this.memory[this.pc++]+this.x]);
				break;
			case 0xD9:	// $D9: CMP $4400,Y - Absolute,Y
				this.cmp(this.a, this.memory[this.absoluteYAddress()]);
				break;
			case 0xDD:	// $DD: CMP $4400,X - Absolute,X
				this.cmp(this.a, this.memory[this.absoluteXAddress()]);
				break;

			// CPX - effects SZC
			case 0xE0:	// $E0: CPX #$44 - Immediate
				this.cmp(this.x, this.memory[this.pc++]);
				break;
			case 0xE4:	// $E4: CPX $44 - Zero Page
				this.cmp(this.x, this.memory[this.memory[this.pc++]]);
				break;
			case 0xEC:	// $EC: CPX $4400 - Absolute
				this.cmp(this.x, this.memory[this.absoluteAddress()]);
				break;

			// CPY - effects SZC
			case 0xC0:	// $C0: CPY #$44 - Immediate
				this.cmp(this.y, this.memory[this.pc++]);
				break;
			case 0xC4:	// $C4: CPY $44 - Zero Page
				this.cmp(this.y, this.memory[this.memory[this.pc++]]);
				break;
			case 0xCC:	// $CC: CPY $4400 - Absolute
				this.cmp(this.y, this.memory[this.absoluteAddress()]);
				break;

			// DEC - effects SZ
			case 0xC6:	// $C6: DEC $44 - Zero Page
				this.setFlags(--this.memory[this.memory[this.pc++]]);
				break;
			case 0xCE:	// $CE: DEC $4400 - Absolute
				this.setFlags(--this.memory[this.absoluteAddress()]);
				break;
			case 0xD6:	// $D6: DEC $44,X - Zero Page,X
				this.setFlags(--this.memory[this.memory[this.pc++]+this.x]);
				break;
			case 0xDE:	// $DE: DEC $4400,X - Absolute,X
				this.setFlags(--this.memory[this.absoluteXAddress()]);
				break;

			// DEX - effects SZ
			case 0xCA:	// $CA: DEX - Implied
				this.setFlags(--this.x);
				break;

			// DEY - effects SZ
			case 0x88:	// $88: DEY - Implied
				this.setFlags(--this.y);
				break;

			// EOR - effects SZ
			case 0x41:	// $41: EOR ($44,X) - Indirect,X
				this.setFlags(this.a ^= this.memory[this.indirectXAddress()]);
				break;
			case 0x45:	// $45: EOR $44 - Zero Page
				this.setFlags(this.a ^= this.memory[this.memory[this.pc++]]);
				break;
			case 0x49:	// $49: EOR #$44 - Immediate
				this.setFlags(this.a ^= this.memory[this.pc++]);
				break;
			case 0x4D:	// $4D: EOR $4400 - Absolute
				this.setFlags(this.a ^= this.memory[this.absoluteAddress()]);
				break;
			case 0x51:	// $51: EOR ($44),Y - Indirect,Y
				this.setFlags(this.a ^= this.memory[this.memory[this.pc++] + this.y]);
				break;
			case 0x55:	// $55: EOR $44,X - Zero Page,X
				this.setFlags(this.a ^= this.memory[this.memory[this.pc++] + this.x]);
				break;
			case 0x59:	// $59: EOR $4400,Y - Absolute,Y
				this.setFlags(this.a ^= this.memory[this.absoluteYAddress()]);
				break;
			case 0x5D:	// $5D: EOR $4400,X - Absolute,X
				this.setFlags(this.a ^= this.memory[this.absoluteXAddress()]);
				break;

			// INC - effects SZ
			case 0xE6:	// $E6: INC $44 - Zero Page
				this.setFlags(++this.memory[this.memory[this.pc++]]);
				break;
			case 0xEE:	// $EE: INC $4400 - Absolute
				this.setFlags(++this.memory[this.absoluteAddress()]);
				break;
			case 0xF6:	// $F6: INC $44,X - Zero Page,X
				this.setFlags(++this.memory[this.memory[this.pc++]+this.x]);
				break;
			case 0xFE:	// $FE: INC $4400,X - Absolute,X
				this.setFlags(++this.memory[this.absoluteXAddress()]);
				break;

			// INX - effects SZ
			case 0xE8:	// $E8: INX - Implied
				this.setFlags(++this.x);
				break;

			// INY - effects SZ
			case 0xC8:	// $C8: INY - Implied
				this.setFlags(++this.y);
				break;

			// JMP - effects no status flags
			case 0x4C:	// $4C: JMP $5597 - Absolute
				this.pc = this.memory[this.pc] + 256 * this.memory[this.pc+1];
				break;
			case 0x6C:	// $6C: JMP ($5597) - Indirect
				address = this.memory[this.pc] + 256 * this.memory[this.pc+1];
				this.pc = this.memory[address] + 256 * this.memory[address+1];
				break;

			// JSR - effects no status flags
			case 0x20:	// $20: JSR $5597 - Absolute
				address = this.memory[this.pc] + 256 * memory[this.pc+1];
				this.pc += 2;
				this.push(this.pc);
				this.pc = address;
				break;

			// LDA - effects SZ
			case 0xA1:	// $A1: LDA ($44,X) - Indirect,X
				this.setFlags(this.a = this.memory[this.indirectXAddress()]);
				break;
			case 0xA5:	// $A5: LDA $44 - Zero Page
				this.setFlags(this.a = this.memory[this.memory[this.pc++]]);
				break;
			case 0xA9:	// $A9: LDA #$44 - Immediate
				this.setFlags(this.a = this.memory[this.pc++]);
				break;
			case 0xAD:	// $AD: LDA $4400 - Absolute
				this.setFlags(this.a = this.memory[this.absoluteAddress()]);
				break;
			case 0xB1:	// $B1: LDA ($44),Y - Indirect,Y
				this.setFlags(this.a = this.memory[this.indirectYAddress()]);
				break;
			case 0xB5:	// $B5: LDA $44,X - Zero Page,X
				this.setFlags(this.a = this.memory[this.memory[this.pc++]+this.x]);
				break;
			case 0xB9:	// $B9: LDA $4400,Y - Absolute,Y
				this.setFlags(this.a = this.memory[absoluteYAddress()]);
				break;
			case 0xBD:	// $BD: LDA $4400,X - Absolute,X
				this.setFlags(this.a = this.memory[absoluteXAddress()]);
				break;

			// LDX - effects SZ
			case 0xA2:	// $A2: LDX #$44 - Immediate
				this.setFlags(this.x = this.memory[this.pc++]);
				break;
			case 0xA6:	// $A6: LDX $44 - Zero Page
				this.setFlags(this.x = this.memory[this.memory[this.pc++]]);
				break;
			case 0xAE:	// $AE: LDX $4400 - Absolute
				this.setFlags(this.x = this.memory[this.absoluteAddress()]);
				break;
			case 0xB6:	// $B6: LDX $44,Y - Zero Page,Y
				this.setFlags(this.x = this.memory[this.memory[this.pc++]+this.y]);
				break;
			case 0xBE:	// $BE: LDX $4400,Y - Absolute,Y
				this.setFlags(this.x = this.memory[this.absoluteYAddress()]);
				break;

			// LDY - effects SZ
			case 0xA0:	// $A0: LDY #$44 - Immediate
				this.setFlags(this.y = this.memory[this.pc++]);
				break;
			case 0xA4:	// $A4: LDY $44 - Zero Page
				this.setFlags(this.y = this.memory[this.memory[this.pc++]]);
				break;
			case 0xAC:	// $AC: LDY $4400 - Absolute
				this.setFlags(this.y = this.memory[this.absoluteAddress()]);
				break;
			case 0xB4:	// $B4: LDY $44,X - Zero Page,X
				this.setFlags(this.y = this.memory[this.memory[this.pc++]+this.x]);
				break;
			case 0xBC:	// $BC: LDY $4400,X - Absolute,X
				this.setFlags(this.y = this.memory[this.absoluteXAddress()]);
				break;

			// LSR - effects SZC
			case 0x46:	// $46: LSR $44 - Zero Page
				address = this.memory[this.pc++];
				this.memory[address] = this.lsr(this.memory[address]);
				break;
			case 0x4A:	// $4A: LSR A - Accumulator
				this.a = this.lsr(this.a);
				break;
			case 0x4E:	// $4E: LSR $4400 - Absolute
				address = this.absoluteAddress();
				this.memory[address] = this.lsr(this.memory[address]);
				break;
			case 0x56:	// $56: LSR $44,X - Zero Page,X
				address = this.memory[this.pc++] + this.x;
				this.memory[address] = this.lsr(this.memory[address]);
				break;
			case 0x5E:	// $5E: LSR $4400,X - Absolute,X
				address = this.absoluteXAddress();
				this.memory[address] = this.lsr(this.memory[address]);
				break;

			// NOP - effects no status flags
			case 0xEA:	// $EA: NOP - Implied
				break;

			// ORA - effects SZ
			case 0x01:	// $01: ORA ($44,X) - Indirect,X
				this.setFlags(this.a |= this.memory[this.indirectXAddress()]);
				break;
			case 0x05:	// $05: ORA $44 - Zero Page
				this.setFlags(this.a |= this.memory[this.memory[this.pc++]]);
				break;
			case 0x09:	// $09: ORA #$44 - Immediate
				this.setFlags(this.a |= this.memory[this.pc++]);
				break;
			case 0x0D:	// $0D: ORA $4400 - Absolute
				this.setFlags(this.a |= this.memory[this.absoluteAddress()]);
				break;
			case 0x11:	// $11: ORA ($44),Y - Indirect,Y
				this.setFlags(this.a |= this.memory[this.memory[this.pc++] + this.y]);
				break;
			case 0x15:	// $15: ORA $44,X - Zero Page,X
				this.setFlags(this.a |= this.memory[this.memory[this.pc++] + this.x]);
				break;
			case 0x19:	// $19: ORA $4400,Y - Absolute,Y
				this.setFlags(this.a |= this.memory[this.absoluteYAddress()]);
				break;
			case 0x1D:	// $1D: ORA $4400,X - Absolute,X
				this.setFlags(this.a |= this.memory[this.absoluteXAddress()]);
				break;

			// PHA - effects no status flags
			case 0x48:	// $48: PHA - Implied
				this.push(this.a);
				break;

			// PHP - effects no status flags
			case 0x08:	// $08: PHP - Implied
				this.push(this.p);
				break;

			// PLA - effects no status flags
			case 0x68:	// $68: PLA - Implied
				this.setFlags(this.a = this.pop());
				break;

			// PLP - effects no status flags
			case 0x28:	// $28: PLP - Implied
				this.p = this.pop() | R_FLAG | B_FLAG;
				break;

			// ROL - effects SZC
			case 0x26:	// $26: ROL $44 - Zero Page
				address = this.memory[this.pc++];
				this.memory[address] = this.rol(this.memory[address]);
				break;
			case 0x2A:	// $2A: ROL A - Accumulator
				this.a = this.rol(this.a);
				break;
			case 0x2E:	// $2E: ROL $4400 - Absolute
				address = this.absoluteAddress();
				this.memory[address] = this.rol(this.memory[address]);
				break;
			case 0x36:	// $36: ROL $44,X - Zero Page,X
				address = this.memory[this.pc++] + this.x;
				this.memory[address] = this.rol(this.memory[address]);
				break;
			case 0x3E:	// $3E: ROL $4400,X - Absolute,X
				address = this.absoluteXAddress();
				this.memory[address] = this.rol(this.memory[address]);
				break;

			// ROR - effects SZC
			case 0x66:	// $66: ROR $44 - Zero Page
				address = this.memory[this.pc++];
				this.memory[address] = this.ror(this.memory[address]);
				break;
			case 0x6A:	// $6A: ROR A - Accumulator
				this.a = this.ror(this.a);
				break;
			case 0x6E:	// $6E: ROR $4400 - Absolute
				address = this.absoluteAddress();
				this.memory[address] = this.ror(this.memory[address]);
				break;
			case 0x76:	// $76: ROR $44,X - Zero Page,X
				address = this.memory[this.pc++] + this.x;
				this.memory[address] = this.ror(this.memory[address]);
				break;
			case 0x7E:	// $7E: ROR $4400,X - Absolute,X
				address = this.absoluteXAddress();
				this.memory[address] = this.ror(this.memory[address]);
				break;

			// RTI - effects SVBDIZC
			case 0x40:	// $40: RTI - Implied
				this.p = this.pop();
				this.p = this.p | R_FLAG;
				this.pc = this.pop() + 256 * this.pop();
				break;

			// RTS - effects no status flags
			case 0x60:	// $60: RTS - Implied
				this.pc = this.pop() + 256 * this.pop();
				break;

			// SBC - effects SVZC
			case 0xE1:	// $E1: SBC ($44,X) - Indirect,X
				this.sbc(this.memory[this.indirectXAddress()]);
				break;
			case 0xE5:	// $E5: SBC $44 - Zero Page
				this.sbc(this.memory[this.memory[this.pc++]]);
				break;
			case 0xE9:	// $E9: SBC #$44 - Immediate
				this.sbc(this.memory[this.pc++]);
				break;
			case 0xED:	// $ED: SBC $4400 - Absolute
				this.sbc(this.memory[this.absoluteAddress()]);
				break;
			case 0xF1:	// $F1: SBC ($44),Y - Indirect,Y
				this.sbc(this.memory[this.indirectYAddress()]);
				break;
			case 0xF5:	// $F5: SBC $44,X - Zero Page,X
				this.sbc(this.memory[this.memory[this.pc++] + this.x]);
				break;
			case 0xF9:	// $F9: SBC $4400,Y - Absolute,Y
				this.sbc(this.memory[this.absoluteYAddress()]);
				break;
			case 0xFD:	// $FD: SBC $4400,X - Absolute,X
				this.sbc(this.memory[this.absoluteXAddress()]);
				break;

			// SEC - effects no status flags
			case 0x38:	// $38: SEC - Implied
				this.p = this.p | C_FLAG;
				break;

			// SED - effects no status flags
			case 0xF8:	// $F8: SED - Implied
				this.p = this.p | D_FLAG;
				break;

			// SEI - effects no status flags
			case 0x78:	// $78: SEI - Implied
				this.p = this.p | I_FLAG;
				break;

			// STA - effects no status flags
			case 0x81:	// $81: STA ($44,X) - Indirect,X
				this.memory[this.indirectXAddress()] = this.a;
				break;
			case 0x85:	// $85: STA $44 - Zero Page
				this.memory[this.memory[this.pc++]] = this.a;
				break;
			case 0x8D:	// $8D: STA $4400 - Absolute
				this.memory[this.absoluteAddress()] = this.a;
				break;
			case 0x91:	// $91: STA ($44),Y - Indirect,Y
				this.memory[this.indirectYAddress()] = this.a;
				break;
			case 0x95:	// $95: STA $44,X - Zero Page,X
				this.memory[this.memory[this.pc++]+this.x] = this.a;
				break;
			case 0x99:	// $99: STA $4400,Y - Absolute,Y
				this.memory[this.absoluteYAddress()] = this.a;
				break;
			case 0x9D:	// $9D: STA $4400,X - Absolute,X
				this.memory[this.absoluteXAddress()] = this.a;
				break;

			// STX - effects no status flags
			case 0x86:	// $86: STX $44 - Zero Page
				this.memory[this.memory[this.pc++]] = this.x;
				break;
			case 0x8E:	// $8E: STX $4400 - Absolute
				this.memory[this.absoluteAddress()] = this.x;
				break;
			case 0x96:	// $96: STX $44,Y - Zero Page,Y
				this.memory[this.memory[this.pc++]+this.y] = this.x;
				break;

			// STY - effects no status flags
			case 0x84:	// $84: STY $44 - Zero Page
				this.memory[this.memory[this.pc++]] = this.y;
				break;
			case 0x8C:	// $8C: STY $4400 - Absolute
				this.memory[this.absoluteAddress()] = this.y;
				break;
			case 0x94:	// $94: STY $44,X - Zero Page,X
				this.memory[this.memory[this.pc++]+this.x] = this.y;
				break;

			// TAX - effects SZ
			case 0xAA:	// $AA: TAX - Implied
				this.setFlags(this.x = this.a);
				break;

			// TAY - effects SZ
			case 0xA8:	// $A8: TAY - Implied
				this.setFlags(this.y = this.a);
				break;

			// TSX - effects no status flags
			case 0xBA:	// $BA: TSX - Implied
				this.setFlags(this.x = this.sp);
				break;

			// TXA - effects SZ
			case 0x8A:	// $8A: TXA - Implied
				this.setFlags(this.a = this.x);
				break;

			// TXS - effects no status flags
			case 0x9A:	// $9A: TXS - Implied
				this.sp = this.x;
				break;

			// TYA - effects SZ
			case 0x98:	// $98: TYA - Implied
				this.setFlags(this.a = this.y);
				break;

			default:
				this.pc--;
				throw new Error("Unimplemented instruction");
		}
	}

	// address helpers

	absoluteAddress() {
		var address = this.memory[this.pc] + 256 * this.memory[this.pc+1];
		
		this.pc += 2;
		
		return address;
	}

	absoluteXAddress() {
		var address = this.memory[this.pc] + 256 * this.memory[this.pc+1] + this.x;
		
		this.pc += 2;
		
		return address;
	}

	absoluteYAddress() {
		var address = this.memory[this.pc] + 256 * memory[this.pc+1] + this.y;
				
		this.pc += 2;
		
		return address;
	}

	indirectXAddress() {
		var address = (this.memory[this.pc++] + this.x) & 0xFF;
		
		return this.memory[address] + 256 * this.memory[address+1];
	}

	indirectYAddress() {
		var address = this.memory[this.pc++];
		
		return this.memory[address] + 256 * this.memory[address+1] + this.y;
	}

	advanceRelative() {
		this.pc = this.pc + this.memory[this.pc] + 1;
	}

	// stack helpers

	pushByte(value) {
		this.memory[0x100 | this.sp--] = value;
	}

	pushShort(value) {
		var lo = value & 0x00FF;
		var hi = (value & 0xFF00) >> 8;
		
		this.memory[0x100 | this.sp--] = hi;
		this.memory[0x100 | this.sp--] = lo;
	}

	pop() {
		return this.memory[0x100 | ++this.sp];
	}

	// status register helpers

	setFlags(value)
	{
		this.p = this.p & ~(N_FLAG | Z_FLAG);
		
		if (value === 0) {
			this.p |= Z_FLAG;
		}
		if (value > 127) {
			this.p |= N_FLAG;
		}
	}

	// math helpers

	adc(b) {
		var temp;
		
		if (this.decimalFlag) {
			temp = 0;
		}			
		else {
			var carry = (this.carryFlag) ? 1 : 0;
			
			temp = (this.a + b + carry);
			this.p = this.p & ~(N_FLAG | Z_FLAG | C_FLAG);
			if (temp === 0) {
				this.p |= Z_FLAG;
			}
			if (temp > 127) {
				this.p |= N_FLAG;
			}
			if (temp > 255) {
				this.p |= C_FLAG;
			}
			if (127 < temp && temp < 256) {
				this.p |= V_FLAG;
			}
		}			
		
		this.a = temp;
	}

	sbc(b) {
		var temp;
		
		if (this.decimalFlag) {
			temp = 0;
		}			
		else {
			var carry = (this.carryFlag) ? 1 : 0;
			
			temp = (this.a - b - carry);
			this.p = this.p & ~(N_FLAG | Z_FLAG | C_FLAG);
			if (temp === 0) {
				this.p |= Z_FLAG;
			}
			if (temp > 127) {
				this.p |= N_FLAG;
			}
			if (temp > 255) {
				this.p |= C_FLAG;
			}
			if (127 < temp && temp < 256) {
				this.p |= V_FLAG;
			}
		}			
		
		this.a = temp;
	}

	asl(b) {
		this.p = (this.p & ~C_FLAG) | (b >> 7);
		result = (b << 1);
		this.setFlags(result);
		
		return result;
	}

	bit(b) {
		this.p = (this.p & ~(N_FLAG | V_FLAG | Z_FLAG) | b & (N_FLAG | V_FLAG));
		
		if (b === 0) {
			this.p |= Z_FLAG;
		}
	}

	cmp(b1, b2) {
		var diff = (b1 - b2);
		
		this.p = this.p & ~(N_FLAG | Z_FLAG | C_FLAG);
		if (diff === 0) {
			this.p |= Z_FLAG;
		}
		this.p |= (diff < 0) ? N_FLAG : C_FLAG;
	}

	lsr(b) {
		this.p = (this.p & ~C_FLAG) | (b & C_FLAG);
		result = b >> 1;
		this.setFlags(result);
		
		return result;
	}

	rol(b) {
		result = (b << 1) | (this.p & C_FLAG);
		this.p = (this.p & ~C_FLAG) | (b >> 7);
		this.setFlags(result);
		
		return result;
	}

	ror(b) {
		result = (b >> 1) | (this.p << 7);
		this.p = (this.p & ~C_FLAG) | (b & C_FLAG);
		this.setFlags(result);
		
		return result;
	}
}

module.exports = Microprocessor;
