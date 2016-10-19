class DWNode {
	constructor(expressions) {
		this.expressions = expressions;
	}

	emit() {
		var bytes = [];

		this.expressions.forEach(expression => {
			var value = expression.getValue();

			if (value > 0xFFFF) {
				throw new Error(".dw value at position" + (i + 1) + " must be less than 65536");
			}

			bytes.push(value & 0xFF);
			bytes.push((value >> 8) & 0xFF);
		});

		return bytes;
	}
}

module.exprts = DWNode;
