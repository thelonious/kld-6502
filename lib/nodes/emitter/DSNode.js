class DSNode {
	constructor(size) {
		this.byteCount = size;
	}

	emit(context) {
		var result = new Array(this.byteCount);

		result.fill(0);

		return result;
	}
}

module.exports = DSNode;
