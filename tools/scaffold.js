#!/usr/bin/env node
'use strict';

const meow = require("meow");
const bemoScaffold = require("./scaffold/index");
const fs = require("fs-extra");

const parseOptions = {
  string: ['directory', 'extension', 'basename'],
  boolean: ['merge-var', 'webfont'],
  alias: {
    d: "directory",
    e: "extension",
    b: "basename",
    m: "merge-var",
    w: "webfont"
  },
};

const description = [
  "Usage: bemo [options]",
  "Options:",
  "   -d, --directory DIRECTORY       Directory where BEMO will be installed",
  "   -e, --extension EXTENSION       Extension to use for SASS files (default: `sass`)",
  "   -b, --basename FILE_BASENAME    Final name of base filename (default: `application`)",
  "",
  "Other options:",
  "   -m, --merge-var             Custom file with merge variables",
  "   -w, --webfont               WebFont system",
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
