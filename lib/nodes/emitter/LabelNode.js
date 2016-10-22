class LabelNode {
    constructor(name) {
        this.name = name;
        this.byteCount = 0;
    }

    emit(context) {
        if (context.symbols.hasOwnProperty(this.name)) {
            if (context.symbols[this.name] != context.address) {
                context.symbols[this.name] = context.address;
                context.symbolChanged = true;
            }
        }
        else {
            context.symbols[this.name] = context.address;
            context.symbolChanged = true;
        }

        return [];
    }
}

module.exports = LabelNode;
