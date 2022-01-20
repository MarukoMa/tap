const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:"development",
    entry:"./test/index.js",
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js' 
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"event-tap", 
            template:"./test/index.html"  //可以指定该html模板为打包好的html文件，并可以将其他的js文件自动引入进去，路径从根目录开始
        }),
    ],
    target: 'web',
    devServer:{		//内部集成了 http-proxy-middlerware
        open:true,  //默认自动打开浏览器
        port:9000
    }
}
