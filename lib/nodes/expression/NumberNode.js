class NumberNode {
	constructor(value) {
		this.byteCount = (-127 <= value && value <= 255) ? 1 : 2;
		this.value = value;
	}
}

module.exports = NumberNode;
