
import * as semver from "semver";
import * as chalk from "chalk";
import * as ICheckNodeVersion from "./ICheckNodeVersion"

class CheckNodeVersionFactory implements ICheckNodeVersion.ICheckNodeVersion {

    constructor(expect: string, name: string) {
        this.expect = expect;
        this.name = name;
    }

    public expect: string;
    public name: string;

    getCheckNodeVersion = (): void => {
        if (!semver.satisfies(process.version, this.expect)) {
            console.log(chalk.red(
                'You are using Node ' + process.version + ', but this version of ' + this.name +
                ' requires Node ' + this.expect + '.\nPlease upgrade your Node version.'
            ))
            process.exit(1);
        }
        if (semver.satisfies(process.version, '9.x')) {
            console.log(chalk.red(
                `You are using Node ${process.version}.\n` +
                `Node.js 9.x has already reached end-of-life and will not be supported in future major releases.\n` +
                `It's strongly recommended to use an active LTS version instead.`
            ))
            process.exit(1);
        }
    }
}

export const CheckNodeVersion = CheckNodeVersionFactory;
