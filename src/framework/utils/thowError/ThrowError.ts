import * as chalk from 'chalk';

export function infoError(msg: string): void {
    console.error(chalk.red(
        `❌  ${msg}`
    ))
}