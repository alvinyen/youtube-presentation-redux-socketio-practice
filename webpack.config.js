const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, './src'),
  output: {
    path: '/',  // 代表打包到public的根目錄下，而不是專案的根目錄！！
    // 必須是絕對路徑，因為打包出來的圖片等等檔名會經過hash另外還有publicPath和filename可以設定
  },
  // resolveLoader: {
  //   moduleExtensions: ['-loader'],
  // },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '/src'), // 設定這個loader只check特定資料夾
      },
    ],
  },
};
