class IdentifierNode {
	constructor(symbols, name) {
		if (symbols === null || symbols === undefined) {
			throw new Error("symbols must be defined");
		}
		if (name === null || name === undefined) {
			throw new Error("name must be defined");
		}

		this.symbols = symbols;
		this.name = name;
	}

	get byteCount() {
		var result = 2;
					
		if (this.symbols.hasOwnProperty(this.name)) {
			var value = this.value;
			
			if (0 <= value && value <= 255) {
				result = 1;
			}					
		}					
		
		return result;
	}

	get value() {
		if (this.symbols.hasOwnProperty(this.name) === false) {
			throw new Error("Symbol is not defined: '%s'", this.name);
		}										
		
		return this.symbols[this.name];
	}
}

module.exports = IdentifierNode;
