#!/usr/bin/env node
var CheckNodeVersion = require('~framework/utils/CheckNodeVersion');
var PackageInfo = require('../package.json');
new CheckNodeVersion(PackageInfo.engines.node, PackageInfo.name).getCheckNodeVersion();
//# sourceMappingURL=index.js.map