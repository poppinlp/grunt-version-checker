"use strict";

module.exports = function(grunt) {
    var Package = require("../package.json"),
        fs = require('fs'),
        path = require('path'),
        exec = require('child_process').execSync,
        saveVersionPath = path.normalize(__dirname  + '/../_version.json'),
        encoding = {
            encoding: 'utf8'
        },
        saveData = fs.existsSync(saveVersionPath) ? JSON.parse(fs.readFileSync(saveVersionPath, encoding)) : {};

    grunt.registerMultiTask("version-checker", Package.description, function() {
        var task = this.target,
            version = this.data.version,
            command = this.data.command;

        this.requiresConfig([this.name, task, "version"].join("."));
        this.requiresConfig([this.name, task, "command"].join("."));

        if (!saveData[task] || version > saveData[task]) {
            grunt.log.writeln('In task "' + task + '" run command "' + command + '" ...');
            grunt.log.writeln(exec(command, encoding));
            saveData[task] = version;
        }

        fs.writeFileSync(saveVersionPath, JSON.stringify(saveData), encoding);
    });
};
