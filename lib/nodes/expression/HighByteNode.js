class HighByteNode {
    constructor(expression) {
        this.expression = expression;
        this.byteCount = 1;
    }

    get value() {
        return (this.expression.value & 0xFF00) >> 8;
    }
}

module.exports = HighByteNode;
