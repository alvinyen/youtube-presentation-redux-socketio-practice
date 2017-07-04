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
#### { 1.1.3. some errors occurred while webpack bundling }
- 當出現`ERROR in Entry module not found: Error: Can't resolve 'babel-loader' in ...`
    - <font color=red>務必確認babel-loader或相關套件有沒有安裝完整！！！</font>
    - 參考[ERROR in Entry module not found: Error: Can't resolve 'babel' #234](https://github.com/vuejs/vue-cli/issues/234)
    - 如果確認套件已經安裝卻還是錯誤，可參考：[Error: Cannot resolve module 'babel-loader' Ask](https://stackoverflow.com/questions/34538466/error-cannot-resolve-module-babel-loader)

<hr>

### [ 2. basic single person chatroom ]
#### { 2.1. server.js }
- 切記socket.io是建立在server上而不是app
    - ![](https://i.imgur.com/VwPJRnq.png)

#### { 2.2. client side code }
- input onKeyUp
    - event.keyCode === 13 // enter
- 非常完整的拿值、驗證非空白、利用spread oprator結合新的value到陣列中 (並展開舊內容)
```
    handleSubmit = (event) => {
        const body = event.target.value;
        if(event.keyCode === 13 && body){
            const message = {
                from: 'Me',
                body
            };
            this.setState({ messages: [...this.state.messages, message] });
            event.target.value = '';
        }
    }
```
