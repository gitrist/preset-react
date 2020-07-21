#!/usr/bin/env node
import * as commander from 'commander';
import * as CheckNodeVersionFactory from "./framework/utils/checkNodeVersion/CheckNodeVersion";
import * as PackageInfo from '../package.json';
import { CommanderStatic } from 'commander';
import { CommandLoader } from './solutions/commands/index'

const bootstrap = () => {
    const program: CommanderStatic = commander;
    new CheckNodeVersionFactory.CheckNodeVersion((<any>PackageInfo).engines.node, (<any>PackageInfo).name).getCheckNodeVersion();
    program
        .version(`${(<any>PackageInfo).name} ${(<any>PackageInfo).version}`, '-v, --version')
        .usage('<command> [options]')
        .description(`${(<any>PackageInfo).name} An React preset template build tool by gitrist.`);
    
    CommandLoader.load(program);
    program.parse(process.argv);
    if (!process.argv.slice(2).length) {
        program.outputHelp();
    }
}

bootstrap();