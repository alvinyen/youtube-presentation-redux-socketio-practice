# youtube-presentation-redux-socketio-practice

## 『 包含isomorphic webpack setting 』

## 『 0. 專案說明 』
- 主要參考來源：[Citrusbyte presents: Making React real-time with Socket.io - Eddie Zaneski](https://www.youtube.com/watch?v=9FPkN6ETqes&t=810s)
- 關鍵詞：socket.io、react and redux、isomorphic webpack setting
### [ 0.1. 其他參考資料 ]
- 導入redux參考：[Using socket.io in React-Redux app to handle real-time data.](https://medium.com/@gethylgeorge/using-socket-io-in-react-redux-app-to-handle-real-time-data-c0e734297795)
- socket.io使用參考
    - video：[The Net Ninja：WebSockets Tutorial (Node & Socket.io Chat App)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9)
        - 深入淺出
        - 廣播和群播的差異
    - article：[it邦幫忙鐵人賽：且戰且走HTML5系列：使用Socket.io 3 ~ 8](http://ithelp.ithome.com.tw/articles/10102886)
        - 5 ~ 8 深入探討socket.io的底層實作，非常值得參考
<hr>
<hr>

## 『 1. 環境建置 』
### [ 1.1. webpack setting ]
#### { 1.1.1. dependencies }
- webpack
    - webpack // in dependencies, not in devDependencies
- babel
    - babel-core
    - babel-loader // for webpack 
    - babel-preset-es2015
    - babel-preset-stage-0
    - babel-preset-react
    - babel-plugin-transform-class-properties // ???
- for frontend
    - react
    - react-dom
- for backend
    - express
    - body-parser
    - socket.io
    - webpack-dev-middleware
    - webpack-dev-server

#### { 1.1.2. webpack.config.js }
- devtool：'source-map' // make devtool on
- entry：entry point of client side codebase
- output：bundle.js的輸出位址
    - 因為使用webpack-dev-middleware for express，因此設定bundle.js的輸出為根目錄
    - output: { path: '/' } // 代表 "/bundle.js"
- query
    - 有.babelrc的babel設定檔就不用設定query欄位
    - 也可以直接開個query field做相關的babel設定 (presets、 plugins..etc.)
    - presets就是plugin的集合

<hr>

### [ 2. server.js ]
- 切記socket.io是建立在server上而不是app
    - ![](https://i.imgur.com/VwPJRnq.png)
