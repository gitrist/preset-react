#!/usr/bin/env node
import * as program from 'commander';
import * as chalk from 'chalk';
import * as CheckNodeVersionFactory from "./framework/utils/checkNodeVersion/CheckNodeVersion";
import * as PackageInfo from '../package.json';
import * as fs from 'fs';
import { Config } from './solutions/shared/config/config';
import { infoError } from './framework/utils/thowError/ThrowError'
import { BootstrapGen } from './solutions/core/BootstrapGen'
import { PresetComponent } from './solutions/core/presetComponent/PresetComponent';

// check node
new CheckNodeVersionFactory.CheckNodeVersion((<any>PackageInfo).engines.node, (<any>PackageInfo).name).getCheckNodeVersion();
PresetComponent('1','1','1');
program
    .version(`${(<any>PackageInfo).name} ${(<any>PackageInfo).version}`, '-v, --version')
    .usage('<command> [options]')
    .description(`${(<any>PackageInfo).name} An React preset template build tool by gitrist.`)

program
    .command('generate <file-type> <file-name>')
    .description('create files')
    .alias('g')
    .action((fileType, fileName, filePath, cmd) => {
        const TempList = new Config().templateList;
        const result = TempList.find(v => v.command === fileType || v.alias === fileType);
        if (!result) {
            infoError(`file-type error!! unsupported file type ${(<any>PackageInfo).name} ( g -h or generate -h ) for help`);
        }
        new BootstrapGen(fileType, fileName, filePath).presetComponent();
    })

// add some useful info on help
program.on('--help', () => {
    console.log()
    console.log(`  Run ${chalk.cyan(`tr <command> --help`)} for detailed usage of given command.`)
    console.log()
})

program.parse(process.argv)    