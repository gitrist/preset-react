const Loaders = require("./loader");
const Plugins = require("./plugin");
const getAlias = require('./alias');


module.exports = {
    mode: process.env.NODE_ENV,
    entry: '../src/index.ts',
    output: {
        filename: 'js/[name]:[hash:5].js',
        publicPath: './',
        path: '../dist'
    },
    module: {
        rules: [...loaders],
    },
    resolve: {
        extensions: ['.ts'],
        alias: {
            ...getAlias()
        }
    },
    plugins: [
        ...plugins
    ]
}