const fs = require('fs');
const path = require('path');
const { NODE_ENV } = process.env;
module.exports = require(`./bundle/webpack.config.${NODE_ENV}.js`);