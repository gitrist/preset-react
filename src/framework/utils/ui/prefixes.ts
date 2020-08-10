import * as chalk from 'chalk';

export const ERROR_PREFIX = chalk.bgRgb(210, 0, 75).bold.rgb(0, 0, 0)(
    ' Error '
);
export const INFO_PREFIX = chalk.rgb(255, 255, 255).bold.bgRgb(60, 255, 100)(' Info ');
  