class DBNode {
	constructor(expressions) {
		this.expressions = expressions;
	}

	emit() {
		return this.expressions.map(expression => {
			var value = expression.getValue();

			if (value > 0xFF) {
				throw new Error(".db value at position" + (i + 1) + " must be less than 256");
			}

			return value;
		});
	}
}

module.exports = DBNode;
