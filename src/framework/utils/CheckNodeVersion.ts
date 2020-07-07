const semver = require('semver');
const chalk = require('chalk');

class CheckNodeVersionFactory{
    public expect: string;
    public id: string;
    constructor(expect:string, id:string){
        this.expect = expect;
        this.id = id;
    }

    getCheckNodeVersion:Function = ():void => {
        console.log(process,chalk)
        if(!semver.satisfies(process.version,this.expect)){
            console.log(chalk.red(
                'You are using Node ' + process.version + ', but this version of ' + this.id +
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

exports.CheckNodeVersionFactory = CheckNodeVersionFactory;