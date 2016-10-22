#!/usr/bin/env node

var fs = require('fs');

var source = fs.readFileSync("../scripts/opcode-info.csv", { encoding: "utf8" });
var lines = source.split(/\n/);

var headerLine = lines.shift();
var headers = headerLine.split(/,/);

// console.log(headers);
var cycles = {};

lines.forEach(line => {
	var items = line.split(/,/);
	var opcode = parseInt(items[0].substring(2), 16);
	var mode = items[2];
	var clocks = items[4];

	if (mode in cycles) {
		cycles[mode][clocks] = true;
	}
	else {
		var d = {};

		d[clocks] = true;
		cycles[mode] = d;
	}
});

Object.keys(cycles).forEach(index => {
	console.log("%s: %s", index, Object.keys(cycles[index]));
});
