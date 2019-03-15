const fs = require("fs-extra");
const path = require("path");
const rl = require('readline-sync');
const glob = require("globby");
const tmp = require("tmp");
const simpleGit = require('simple-git');

module.exports = {
  generate: function(options, cb) {
    this.cloneDirTo(
      'https://github.com/cantierecreativo/bemo.git',
      'sass',
      options.directory,
      function() {
        if (options.extension) {
          let sassFiles = glob.sync(path.join(options.directory, "**/*.sass"));

          sassFiles.forEach(function(sassFile) {
            let newPath = sassFile.replace(/\.sass$/, "." + options.extension);
            fs.renameSync(sassFile, newPath);
          });
        }
        if (options.basename) {
          console.log("basename required: " + options.basename)
        } else {
          console.log("default basename application.sass")
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

    let git = simpleGit();
    let tmpDir = tmp.dirSync();
    git.clone(repo, tmpDir.name, function() {
      fs.copySync(path.join(tmpDir.name, repoPath), dest);
      cb(null);
    });
  }
}
