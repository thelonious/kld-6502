#!/usr/bin/env node

var fs = require('fs');

var source = fs.readFileSync("./opcode-info.csv", { encoding: "utf8" });
var lines = source.split(/\n/);

var headerLine = lines.shift();
var headers = headerLine.split(/,/);

// console.log(headers);
var cycles = [];

lines.forEach(line => {
	var items = line.split(/,/);
	var opcode = parseInt(items[0].substring(2), 16);
	var clock = items[4];

	clock = parseInt((clock === "2/3") ? "2" : clock, 10);

	cycles[opcode] = clock;
});

var index = 0;
var rows = [];

for (var row = 0; row < 16; row++) {
	var r = [];

	for (var col = 0; col < 16; col++) {
		var clock = cycles[index++];

		if (clock === undefined) {
			clock = 0;
		}

		r.push(clock);
	}

	rows.push(r);
}

rowsAsText = rows.map(row => {
	return row.join(", ");
});

console.log(rowsAsText.join(",\n"));
