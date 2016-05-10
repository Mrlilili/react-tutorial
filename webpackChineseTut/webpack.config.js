/**
 * Created by admin-b on 2016/5/10.
 * fas
 */
var webpack = require('webpack');


module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  plugins:[
    new webpack.BannerPlugin('真特么好用')
  ]
}
