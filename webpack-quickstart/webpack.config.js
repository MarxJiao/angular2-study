module.exports = {
     entry: './app/main.ts',
     output: {
         path: './dist',
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [{
             test: /\.ts$/,
             exclude: /node_modules/,
             loader: 'ts-loader'
         }]
     }
 };