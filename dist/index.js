#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var chalk = require("chalk");
var CheckNodeVersionFactory = require("./framework/utils/checkNodeVersion/CheckNodeVersion");
var PackageInfo = require("../package.json");
var config_1 = require("./solutions/shared/config/config");
var ThrowError_1 = require("./framework/utils/thowError/ThrowError");
var BootstrapGen_1 = require("./solutions/core/BootstrapGen");
var PresetComponent_1 = require("./solutions/core/presetComponent/PresetComponent");
// check node
new CheckNodeVersionFactory.CheckNodeVersion(PackageInfo.engines.node, PackageInfo.name).getCheckNodeVersion();
PresetComponent_1.PresetComponent('1', '1', '1');
program
    .version(PackageInfo.name + " " + PackageInfo.version, '-v, --version')
    .usage('<command> [options]')
    .description(PackageInfo.name + " An React preset template build tool by gitrist.");
program
    .command('generate <file-type> <file-name>')
    .description('create files')
    .alias('g')
    .action(function (fileType, fileName, filePath, cmd) {
    var TempList = new config_1.Config().templateList;
    var result = TempList.find(function (v) { return v.command === fileType || v.alias === fileType; });
    if (!result) {
        ThrowError_1.infoError("file-type error!! unsupported file type " + PackageInfo.name + " ( g -h or generate -h ) for help");
    }
    new BootstrapGen_1.BootstrapGen(fileType, fileName, filePath).presetComponent();
});
// add some useful info on help
program.on('--help', function () {
    console.log();
    console.log("  Run " + chalk.cyan("tr <command> --help") + " for detailed usage of given command.");
    console.log();
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map