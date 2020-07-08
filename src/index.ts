#!/usr/bin/env node
import * as program from 'commander';
import * as chalk from 'chalk';
import * as CheckNodeVersionFactory from "./framework/utils/CheckNodeVersion/CheckNodeVersion";
import * as PackageInfo from '../package.json';

// check node
new CheckNodeVersionFactory.CheckNodeVersion((<any>PackageInfo).engines.node,(<any>PackageInfo).name).getCheckNodeVersion();

program
    .version(`${(<any>PackageInfo).name} ${(<any>PackageInfo).version}`,'-v, --version')
    .usage('<command> [options]')
    .description(`${(<any>PackageInfo).name} An React preset template build tool by grist.`)

program
    .command('generate <file-type> <file-name>')
    .description('create files')
    .alias('g')
    .action((fileType,fileName,cmd) => {
        console.log(fileType,fileName,cmd)
    } )
    
// add some useful info on help
program.on('--help', () => {
    console.log()
    console.log(`  Run ${chalk.cyan(`tr <command> --help`)} for detailed usage of given command.`)
    console.log()
})

program.parse(process.argv)    