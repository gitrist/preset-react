class LoaderFactory{
    constructor(){
        this.loaders = [];
    }
    
    getTSLoader(){
        const TSLoader = {
            test: /\.(ts)$/,
            exclude: /node_modules/,
            use: 'ts-loader'
        }
        this.loaders.push(TSLoader);
    }

    getLoaders(){
        this.getTSLoader();
        return this.loaders;
    }
}

module.exports = new LoaderFactory().getLoaders();