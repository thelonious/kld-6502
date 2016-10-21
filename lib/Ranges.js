class Range {
	constructor(start, end, types) {
		this.start = start;
		this.end = end;
		this.types = types;
	}
}

class Ranges {
	constructor() {
		this.clear();
	}

	add(number, type) {
		if (this.start === null) {
			// this is the first time we've been called
			this.start = this.end = number;
		}
		else {
			if (this.end + 1 == number) {
				// extend current range
				this.end = number;
			}
			else {
				// starting new range, save last one and start new one
				this.ranges.push(new Range(this.start, this.end, Object.keys(this.types).sort()));
				this.start = this.end = number;
				this.types = {};
			}
		}

		if (type !== undefined) {
			this.types[type] = true;
		}
	}

	flush() {
		if (this.start !== null) {
			if (this.start != this.end) {
				this.ranges.push(new Range(this.start, this.end, Object.keys(this.types).sort()));
				this.start = this.end = null;
			}
		}
	}

	clear() {
		this.ranges = [];
		this.start = null;
		this.end = null;
		this.types = {};
	}
}

module.exports = Ranges;
