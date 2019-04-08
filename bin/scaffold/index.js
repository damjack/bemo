const fs = require("fs-extra");
const path = require("path");
const rl = require('readline-sync');
const glob = require("globby");
const tmp = require("tmp");

module.exports = {
  generate: function(options, cb) {
    this.cloneDirTo(
      'node_modules/bemo',
      'sass',
      options.directory,
      function() {
        if (options.basename) {
          let basenameFile = path.join(options.directory, "bemo.sass")
          let newBasename = basenameFile.replace(/bemo/, options.basename);
          fs.renameSync(basenameFile, newBasename);
        } else {
          let basenameFile = path.join(options.directory, "bemo.sass")
          let newBasename = basenameFile.replace(/bemo/, "application");
          fs.renameSync(basenameFile, newBasename);
        }

        if (options.extension) {
          let sassFiles = glob.sync(path.join(options.directory, "**/*.sass"));

          sassFiles.forEach(function(sassFile) {
            let newPath = sassFile.replace(/\.sass$/, "." + options.extension);
            fs.renameSync(sassFile, newPath);
          });
        }

        if (options.mergeVar) {
          console.log("Merge var: " + options.mergeVar)
        }

        cb(null);
      }
    );
  },

  ask: function(question) {
    return rl.question(question + " ");
  },

  yesNo: function(question) {
    let answer = this.ask(question + " [y/n]").toLowerCase();
    return answer == 'y' || answer == 'yes';
  },

  confirmCleanDir: function(path) {
    function cleanDir() {
      fs.mkdirpSync(path);
    }

    if (!fs.existsSync(path)) {
      cleanDir();
      return;
    }

    if (this.yesNo("Can I overwrite the dir " + path + "?")) {
      fs.removeSync(path);
      cleanDir();
    } else {
      process.exit(0);
    }
  },

  cloneDirTo: function(repo, repoPath, dest, cb) {
    this.confirmCleanDir(dest);

    let tmpDir = tmp.dirSync();
    try {
      fs.copySync(path.join(repo, repoPath), tmpDir.name);
      fs.copySync(tmpDir.name, dest);
      cb(null);
    } catch (err) {
      console.error(err)
    }
  }
}
