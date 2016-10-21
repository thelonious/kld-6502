class Range {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}
}

class Ranges {
	constructor() {
		this.clear();
	}

	add(number) {
		if (this.start === null) {
			this.start = number;
			this.end = number;
		}
		else {
			if (this.end + 1 == number) {
				this.end = number;
			}
			else {
				this.ranges.push(new Range(this.start, this.end));
				this.start = this.end = number;
			}
		}
	}

	flush() {
		if (this.start !== null) {
			if (this.start != this.end) {
				this.ranges.push(new Range(this.start, this.end));
				this.start = this.end = null;
			}
		}
	}

	clear() {
		this.ranges = [];
		this.start = null;
		this.end = null;
	}
}

module.exports = Ranges;
