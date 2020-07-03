const ProgressBarPlugin = require('progress-bar-webpack-plugin');
class PluginFactory{
    constructor(){
        this.plugins = []
    }
    getProgressBarPlugin(){
        this.plugins.push(new ProgressBarPlugin());
    }
    

    getPlugins(){
        this.getProgressBarPlugin();
        return this.plugins;
    }
}

module.exports = new PluginFactory().getPlugins();