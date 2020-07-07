#!/usr/bin/env node
const CheckNodeVersion = require('~framework/utils/CheckNodeVersion');
const PackageInfo = require('../package.json')

new CheckNodeVersion(PackageInfo.engines.node,PackageInfo.name).getCheckNodeVersion();