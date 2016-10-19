class DSNode {
	constructor(size) {
		this.size = size;
	}

	emit() {
		var result = new Array(this.size);

		result.fill(0);

		return result;
	}
}

module.exports = DSNode;
