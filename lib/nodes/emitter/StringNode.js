class StringNode {
	constructor(expressions) {
		this.expressions = expressions;
		this.byteCount = expressions.reduce((accum, string) => {
			return accum + string.length;
		}, 0);
	}

	emit(context) {
		var bytes = [];

		this.expressions.forEach(text => {
			text.split("").forEach(ch => {
				var code = ch.charCodeAt(0);

				if (code > 255) {
					throw new Error("Character out of range: %s(%s)", ch, code);
				}

				bytes.push(code);
			});
		});

		return bytes;
	}
}

module.exports = StringNode;
