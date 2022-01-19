const path = require('path');

module.exports = {
  entry: './test/index.js',
  output: {
    filename: 'bundle.js',
    // 将输出的文件都放在dist目录下
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  devServer:{
    port:'8080',
    open:true
  },
  mode: 'development'
};