var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "builder.js",
    library: 'builder',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      "_": "lodash",
      "$": "jquery",
      "jquery-ui": "jquery-ui",
    })
  ],
  module: {
    loaders: [{
      test: /\.less$/,
      loader: "style!css!less"
    }, {
      test: /\.ejs$/,
      loader: "ejs-loader"
    }]
  }
}
