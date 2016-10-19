class DBNode {
	constructor(expressions) {
		this.expressions = expressions;
	}

	emit(context) {
		return this.expressions.map((expression, index) => {
			var value = expression.value;

			if (value > 0xFF) {
				throw new Error(".db value at position " + (index + 1) + " must be less than 256: was " + value);
			}

			return value;
		});
	}
}

module.exports = DBNode;
