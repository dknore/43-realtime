const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let chats = [];

io.on('connection', socket => {
  console.log('connected:', socket.id);

  io.emit('initial-chat-info', {chats});

  socket.on('send-chat', (data) => {
    console.log('received chat', data);
    chats.push(data);
    io.emit('single-chat-info', {msg: data.msg, id: data.id});
  });
});

const Bundler = require('parcel-bundler');
let bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
http.listen(3000, function() {
  console.log('Listening on http://localhost' + PORT);
});