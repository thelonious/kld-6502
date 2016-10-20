class StringNode {
	constructor(strings) {
		this.strings = strings;
		this.byteCount = strings.reduce((accum, string) => {
			return accum + string.length;
		}, 0);
	}

	emit(context) {
		var bytes = [];

		this.strings.forEach(string => {
			string.split("").forEach(ch => {
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
