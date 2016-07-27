# start
run ```npm start```, it will start a static server at port 8081

run ```webpack```,it will pack the code

# 坑
1. ts文件的loader一定要用「te-loader」,多个loader用loaders
2. ts文件中引用的文件的相对路径要相对服务器的根目录
3. 使用以下插件来减小文件
```
plugins: [

    // 将依赖与自己的代码分离
    new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor']
    }),

    // 压缩文件
    new webpack.optimize.UglifyJsPlugin(),
]
```
