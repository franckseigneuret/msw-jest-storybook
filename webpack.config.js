const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}