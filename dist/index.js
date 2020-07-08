#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var chalk = require("chalk");
var CheckNodeVersionFactory = require("./framework/utils/CheckNodeVersion/CheckNodeVersion");
var PackageInfo = require("../package.json");
// check node
new CheckNodeVersionFactory.CheckNodeVersion(PackageInfo.engines.node, PackageInfo.name).getCheckNodeVersion();
program
    .version(PackageInfo.name + " " + PackageInfo.version, '-v, --version')
    .usage('<command> [options]')
    .description(PackageInfo.name + " An React preset template build tool by grist.");
program
    .command('generate <file-type> <file-name>')
    .description('create files')
    .alias('g')
    .action(function (d, otherd, cmd) {
    console.log(d, otherd, cmd);
});
// add some useful info on help
program.on('--help', function () {
    console.log();
    console.log("  Run " + chalk.cyan("tr <command> --help") + " for detailed usage of given command.");
    console.log();
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map