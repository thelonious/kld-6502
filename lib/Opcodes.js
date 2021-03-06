module.exports = {
//        ABS   ABSX  ABSY  ACC   IMM   IMPL  IND   INDX  INDY  REL   ZERO  ZERX  ZERY
    adc: [0x6D, 0x7D, 0x79,   -1, 0x69,   -1,   -1, 0x61, 0x71,   -1, 0x65, 0x75,   -1],
    and: [0x2D, 0x3D, 0x39,   -1, 0x29,   -1,   -1, 0x21, 0x31,   -1, 0x25, 0x35,   -1],
    asl: [0x0E, 0x1E,   -1, 0x0A,   -1,   -1,   -1,   -1,   -1,   -1, 0x06, 0x16,   -1],
    bcc: [  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0x90,   -1,   -1,   -1],
    bcs: [  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0xB0,   -1,   -1,   -1],
    beq: [  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0xF0,   -1,   -1,   -1],
    bit: [0x2C,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0x24,   -1,   -1],
    bmi: [  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0x30,   -1,   -1,   -1],
    bne: [  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0xD0,   -1,   -1,   -1],
    bpl: [  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0x10,   -1,   -1,   -1],
    brk: [  -1,   -1,   -1,   -1,   -1, 0x00,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    bvc: [  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0x50,   -1,   -1,   -1],
    bvs: [  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0x70,   -1,   -1,   -1],
    clc: [  -1,   -1,   -1,   -1,   -1, 0x18,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    cld: [  -1,   -1,   -1,   -1,   -1, 0xD8,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    cli: [  -1,   -1,   -1,   -1,   -1, 0x58,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    clv: [  -1,   -1,   -1,   -1,   -1, 0xB8,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    cmp: [0xCD, 0xDD, 0xD9,   -1, 0xC9,   -1,   -1, 0xC1, 0xD1,   -1, 0xC5, 0xD5,   -1],
    cpx: [0xEC,   -1,   -1,   -1, 0xE0,   -1,   -1,   -1,   -1,   -1, 0xE4,   -1,   -1],
    cpy: [0xCC,   -1,   -1,   -1, 0xC0,   -1,   -1,   -1,   -1,   -1, 0xC4,   -1,   -1],
    dec: [0xCE, 0xDE,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0xC6, 0xD6,   -1],
    dex: [  -1,   -1,   -1,   -1,   -1, 0xCA,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    dey: [  -1,   -1,   -1,   -1,   -1, 0x88,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    eor: [0x4D, 0x5D, 0x59,   -1, 0x49,   -1,   -1, 0x41, 0x51,   -1, 0x45, 0x55,   -1],
    inc: [0xEE, 0xFE,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0xE6, 0xF6,   -1],
    inx: [  -1,   -1,   -1,   -1,   -1, 0xE8,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    iny: [  -1,   -1,   -1,   -1,   -1, 0xC8,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    jmp: [0x4C,   -1,   -1,   -1,   -1,   -1, 0x6C,   -1,   -1,   -1,   -1,   -1,   -1],
    jsr: [0x20,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    lda: [0xAD, 0xBD, 0xB9,   -1, 0xA9,   -1,   -1, 0xA1, 0xB1,   -1, 0xA5, 0xB5,   -1],
    ldx: [0xAE,   -1, 0xBE,   -1, 0xA2,   -1,   -1,   -1,   -1,   -1, 0xA6,   -1, 0xB6],
    ldy: [0xAC, 0xBC,   -1,   -1, 0xA0,   -1,   -1,   -1,   -1,   -1, 0xA4, 0xB4,   -1],
    lsr: [0x4E, 0x5E,   -1, 0x4A,   -1,   -1,   -1,   -1,   -1,   -1, 0x46, 0x56,   -1],
    nop: [  -1,   -1,   -1,   -1,   -1, 0xEA,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    ora: [0x0D, 0x1D, 0x19,   -1, 0x09,   -1,   -1, 0x01, 0x11,   -1, 0x05, 0x15,   -1],
    pha: [  -1,   -1,   -1,   -1,   -1, 0x48,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    php: [  -1,   -1,   -1,   -1,   -1, 0x08,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    pla: [  -1,   -1,   -1,   -1,   -1, 0x68,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    plp: [  -1,   -1,   -1,   -1,   -1, 0x28,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    rol: [0x2E, 0x3E,   -1, 0x2A,   -1,   -1,   -1,   -1,   -1,   -1, 0x26, 0x36,   -1],
    ror: [0x6E, 0x7E,   -1, 0x6A,   -1,   -1,   -1,   -1,   -1,   -1, 0x66, 0x76,   -1],
    rti: [  -1,   -1,   -1,   -1,   -1, 0x40,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    rts: [  -1,   -1,   -1,   -1,   -1, 0x60,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    sbc: [0xED, 0xFD, 0xF9,   -1, 0xE9,   -1,   -1, 0xE1, 0xF1,   -1, 0xE5, 0xF5,   -1],
    sec: [  -1,   -1,   -1,   -1,   -1, 0x38,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    sed: [  -1,   -1,   -1,   -1,   -1, 0xF8,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    sei: [  -1,   -1,   -1,   -1,   -1, 0x78,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    sta: [0x8D, 0x9D, 0x99,   -1,   -1,   -1,   -1, 0x81, 0x91,   -1, 0x85, 0x95,   -1],
    stx: [0x8E,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0x86,   -1, 0x96],
    sty: [0x8C,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0x84, 0x94,   -1],
    tax: [  -1,   -1,   -1,   -1,   -1, 0xAA,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    tay: [  -1,   -1,   -1,   -1,   -1, 0xA8,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    tsx: [  -1,   -1,   -1,   -1,   -1, 0xBA,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    txa: [  -1,   -1,   -1,   -1,   -1, 0x8A,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    txs: [  -1,   -1,   -1,   -1,   -1, 0x9A,   -1,   -1,   -1,   -1,   -1,   -1,   -1],
    tya: [  -1,   -1,   -1,   -1,   -1, 0x98,   -1,   -1,   -1,   -1,   -1,   -1,   -1]
};
