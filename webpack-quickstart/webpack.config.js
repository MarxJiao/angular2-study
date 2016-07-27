var webpack = require('webpack');
module.exports = {
    entry: {
        app:'./app/main.ts',
        vendor: './app/vendor.ts'
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.css', '.html']
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            loaders: ['ts-loader']
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ]
    
}
