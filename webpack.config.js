var path = require('path');

module.exports = {
  entry: './src/prototype.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "inline-source-map",
}
