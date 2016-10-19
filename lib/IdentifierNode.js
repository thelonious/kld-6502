class IdenifierNode {
	constructor(symbols, name) {
		this.symbols = symbols;
		this.name = name;
	}

	get byteCount() {
		var result = 2;
					
		if (this.symbols.hasOwnProperty(this.name)) {
			var value = this.getValue();
			
			if (0 <= value && value <= 255) {
				result = 1;
			}					
		}					
		
		return result;
	}

	get value() {
		if (this.symbols.hasOwnProperty(this.name) === false) {
			throw new Error("Symbol is not defined: '" + this.name + "'");
		}										
		
		return this.symbols[this.name];
	}
}

module.exports = IdenifierNode;
