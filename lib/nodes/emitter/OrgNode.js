class OrgNode {
    constructor(address) {
        this.address = address;
        this.byteCount = 0;
    }

    emit(context) {
        context.address = this.address;
        
        return [];
    }
}

module.exports = OrgNode;
