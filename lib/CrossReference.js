class CrossReference {
    constructor() {
        this.length = 0;
        this.indicesByName = {};
        this.namesByIndex = [];
    }

    add(name, index) {
        if (name in this.indicesByName) {
            throw new Error("Name is already in cross reference: %s", name);
        }

        this.length += 1;
        this.indicesByName[name] = index;

        if (this.namesByIndex[index] === undefined) {
            this.namesByIndex[index] = [name];
        }
        else {
            this.namesByIndex[index].push(name);
        }
    }

    remove(name) {
        var index = this.indicesByName[name];

        if (index !== undefined) {
            var names = this.namesByIndex[index];

            if (names.length === 1) {
                this.namesByIndex = this.namesByIndex.slice(index, 1);
            }
            else {
                this.namesByIndex[index] = names.filter(e => e !== name);
            }

            this.length -= 1;
            delete this.indicesByName[name];
        }
    }

    get names() {
        return Object.keys(this.indicesByName);
    }

    get indices() {
        return Object.keys(this.namesByIndex);
    }

    nameIndex(name) {
        return this.indicesByName[name];
    }

    namesAtIndex(index) {
        return this.namesByIndex[index];
    }
}

module.exports = CrossReference;
