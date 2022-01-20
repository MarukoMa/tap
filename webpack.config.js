const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:"development",
    entry:"./test/index.js",
    output:{
        path:path.join(process.cwd(),"dist"),
        filename:'[name].[chunkhash:6].js'  //更改单个文件内容后会指定将更改的文件进行重新打包（默认所有重新打包）
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"event-tap", 
            template:"./test/index.html"  //可以指定该html模板为打包好的html文件，并可以将其他的js文件自动引入进去，路径从根目录开始
        }),
        new webpack.BannerPlugin('版权归牛superPiu公司所有')

    ],
    target: 'web',
    devServer:{		//内部集成了 http-proxy-middlerware
        open:true,  //默认自动打开浏览器
        port:4000
    }
}
