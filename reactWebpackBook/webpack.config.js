var path = require('path');


var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      //exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ['react']
      }
    }]
  }
};

module.exports = config;
