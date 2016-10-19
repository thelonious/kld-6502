class LowByteNode {
	constructor(expression) {
		this.expression = expression;
		this.byteCount = 1;
	}

	get value() {
		return this.expression.getValue & 0xFF;
	}
}

module.exports = LowByteNode;
