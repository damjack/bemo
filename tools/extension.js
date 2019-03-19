#!/usr/bin/env node

const meow = require("meow");
const fs = require("fs-extra");

const parseOptions = {
  string: ['directory', 'basename', 'merge-var'],
  alias: {
    'directory': ['d'],
    'basename': ['b'],
    'merge-var': ['m', 'mergeVar']
  },
};

const description = [
  "Usage",
  "  $ component -d <DIRECTORY> -b <FILE_BASENAME> -m",
  "",
  "Options",
  "  -d, --directory        Directory where BEMO will be installed",
  "  -b, --basename         Final name of base filename (default: `application`)",
  "  -m, --merge-var        Custom file with merge variables"
];

const cli = meow(description.join("\n"), parseOptions);
const args = cli.flags;
const directory = args.directory;

if (!directory) {
  console.log("Missing --directory argument!");
  process.exit(1);
}

try {
  let stat = fs.statSync(directory);
  if (!stat.isDirectory()) {
    console.log(directory + " is not a directory!");
    process.exit(1);
  }
} catch(e) {
}
