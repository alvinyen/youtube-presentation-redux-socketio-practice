const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const app = express(); // app for convention
const server = http.createServer(app);
const io = socketIo(server); // create socket io server with server instance, not an app which is the instance of express

// server static file
app.use(express.static(`${__dirname}/public`));

// for webpack setting
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.use(bodyParser.urlencoded({ extended: true }));

server.listen(3000);
