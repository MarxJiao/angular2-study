# start
run ```npm start```, it will start a static server at port 8081

run ```webpack```,it will pack the code

# 坑
### 1. ts文件的loader一定要用「ts-loader」,多个loader用loaders
### 2. ts文件中引用的文件的相对路径要相对服务器的根目录, 配置moduleId后可使用相对路劲

不配置moduleId情况下这样写相对路径，相对于url的根路径
```
@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})
```
@component中配置moduleId后，可以写这样的相对路径
```
@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})
```
### 3. 使用以下插件来减小文件
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
