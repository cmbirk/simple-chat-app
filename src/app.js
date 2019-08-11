const express = require('express');
const path = require('path');
const socketio = require('socket.io');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views/index'));
});

server = app.listen(3003);

const io = socketio(server);
io.on('connection', (socket) => {
  console.log('New user connected');
});
