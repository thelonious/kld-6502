class DWNode {
    constructor(expressions) {
        this.expressions = expressions;
        this.byteCount = expressions.length * 2;
    }

    emit(context) {
        var bytes = [];

        this.expressions.forEach((expression, index) => {
            var value = expression.value;

            if (value > 0xFFFF) {
                throw new Error(".dw value at position" + (index + 1) + " must be less than 65536");
            }

            bytes.push(value & 0xFF);
            bytes.push((value >> 8) & 0xFF);
        });

        return bytes;
    }
}

module.exports = DWNode;
