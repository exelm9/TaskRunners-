const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, './output'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  }
}




