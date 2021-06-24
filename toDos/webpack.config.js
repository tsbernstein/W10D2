const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/todo_redux.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: './bundle.js',
    sourceMapFilename: "[name].js.map"
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  }
}