class OrgNode {
	constructor(address) {
		this.address = address;
	}

	emit(context) {
		context.address = this.address;
		
		return [];
	}
}

module.exports = OrgNode;
