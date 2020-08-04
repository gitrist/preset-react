import { CommanderStatic } from 'commander';
import { AbstractCommand } from '../../framework/abstract/abstract.command';

export class InfoCommand extends AbstractCommand {
    public load(program: CommanderStatic) {
      this.action.handle();
      program
        .command('info')
        .alias('i')
        .description('Display details.')
        .action(async () => {
          await this.action.handle();
        });
    }
  }
  