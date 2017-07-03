const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, './src'),
  output: {
    path: '/',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '/src'),
      },
    ],
  },
};
