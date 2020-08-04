import {AbstractCommand} from "../../framework/abstract/abstract.command";
import { Command, CommanderStatic } from 'commander';
import {IInput} from "../../framework/interfaces";

export class GeneratorCommand extends AbstractCommand{
  public load(program:CommanderStatic): void {
    program
      .command('generate <schematic> [name] [path]')
      .alias('g')
      .description('generate react schematic')
      .option('-c --component [component-name]')
      .action(async (
        schematic: string,
        name: string,
        path: string,
        command: Command,
      )=>{
        const inputs: IInput[] = [],options: IInput[]=[];
        options.push({name:'component',value: command.component})
        inputs.push({name: 'schematic',value: schematic});
        inputs.push({name: 'name',value: name});
        inputs.push({name: 'path',value: path});
        await this.action.handle(inputs,options)
      })
  }
}