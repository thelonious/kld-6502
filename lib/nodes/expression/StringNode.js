class StringNode {
	constructor(value) {
		this.byteCount = 1; // value.length;
		this.value = value.charCodeAt(0);
	}
}

module.exports = StringNode;
