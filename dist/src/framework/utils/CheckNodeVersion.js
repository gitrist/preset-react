var semver = require('semver');
var chalk = require('chalk');
var CheckNodeVersionFactory = /** @class */ (function () {
    function CheckNodeVersionFactory(expect, id) {
        var _this = this;
        this.getCheckNodeVersion = function () {
            console.log(process, chalk);
            if (!semver.satisfies(process.version, _this.expect)) {
                console.log(chalk.red('You are using Node ' + process.version + ', but this version of ' + _this.id +
                    ' requires Node ' + _this.expect + '.\nPlease upgrade your Node version.'));
                process.exit(1);
            }
            if (semver.satisfies(process.version, '9.x')) {
                console.log(chalk.red("You are using Node " + process.version + ".\n" +
                    "Node.js 9.x has already reached end-of-life and will not be supported in future major releases.\n" +
                    "It's strongly recommended to use an active LTS version instead."));
                process.exit(1);
            }
        };
        this.expect = expect;
        this.id = id;
    }
    return CheckNodeVersionFactory;
}());
exports.CheckNodeVersionFactory = CheckNodeVersionFactory;
//# sourceMappingURL=CheckNodeVersion.js.map