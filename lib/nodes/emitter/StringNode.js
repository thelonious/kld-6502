class StringNode {
	constructor(expressions) {
		this.expressions = expressions;
	}

	emit(context) {
		var bytes = [];

		this.expressions.forEach(text => {
			text.split("").forEach(ch => bytes.push(ch.charCodeAt(0)));
		});

		return bytes;
	}
}

module.exports = StringNode;
