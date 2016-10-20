class LabelNode {
	constructor(name) {
		this.name = name;
		this.byteCount = 0;
	}

	emit(context) {
		if (context.symbols.hasOwnProperty(this.name)) {
			//throw new Error("Symbol already defined: '%s'", this.name);
		}

		context.symbols[this.name] = context.address;

		return [];
	}
}

module.exports = LabelNode;
