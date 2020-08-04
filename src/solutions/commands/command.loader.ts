import * as chalk from 'chalk';
import { CommanderStatic } from 'commander';
import { InfoAction } from '../../framework/actions/index.actions';
import { ERROR_PREFIX } from '../../framework/utils/ui';
import { InfoCommand } from './InfoCommand';
import {GeneratorCommand} from "./generator.command";
import {GeneratorAction} from "../../framework/actions/generator.action";

export class CommandLoader {
    public static load(program: CommanderStatic): void {
        new InfoCommand(new InfoAction()).load(program);
        new GeneratorCommand(new GeneratorAction()).load(program);
        this.handleInvalidCommand(program);
    }

    private static handleInvalidCommand(program: CommanderStatic){
        program.on('command:*',()=>{
            console.error(
                `\n${ERROR_PREFIX} Invalid command: ${chalk.red('%s')}`,
                program.args.join(' '),
              );
              console.log(
                `See ${chalk.red('--help')} for a list of available commands.\n`,
              );
              process.exit(1);
        })
    }
}