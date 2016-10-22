class MultiplicationNode {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    get byteCount() {
        var value = this.value;
                    
        return (-127 <= value && value <= 255) ? 1 : 2;
    }

    get value() {
        return this.left.value * this.right.value;
    }
}

module.exports = MultiplicationNode;
