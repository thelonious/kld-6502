class LabelNode {
	constructor(name) {
		this.name = name;
		this.byteCount = 0;
	}

	emit(context) {
		context.symbols[this.name] = context.address;

		return [];
	}
}

module.exports = LabelNode;
