class StringNode {
	constructor(text) {
		this.text = text;
	}

	emit(context) {
		return this.text.split("").map(ch => ch.charCodeAt(0));
	}
}

module.exports = StringNode;
