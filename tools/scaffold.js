#!/usr/bin/env node

const meow = require("meow");
const bemoScaffold = require("./scaffold/index");
const fs = require("fs-extra");

const parseOptions = {
  string: ['directory', 'extension', 'basename', 'merge-var'],
  alias: {
    'directory': ['d'],
    'extension': ['e'],
    'basename': ['b'],
    'merge-var': ['m', 'mergeVar']
  },
};

const description = [
  "Usage",
  "  $ scaffold -d <DIRECTORY> -e <EXTENSION> -b <FILE_BASENAME> -m <MERGE_THEME_VARIABLES>",
  "",
  "Options",
  "  -d, --directory        Directory where BEMO will be installed",
  "  -e, --extension        Extension to use for SASS files (default: `sass`)",
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

bemoScaffold.generate(args, function(err) {
  if (err) {
    console.log(err.message);
    process.exit(1);
  } else {
    console.log("Hurray! Everything is ready!");
  }
});
