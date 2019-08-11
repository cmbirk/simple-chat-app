const debug = require('debug')('simple-chat:app');
const express = require('express');
const path = require('path');
const socketio = require('socket.io');

const app = express();

const port = 3003;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views/index'));
});

server = app.listen(port, () => {
  debug(`App listening on port ${port}`);
});

const io = socketio(server);
io.on('connection', (socket) => {
  debug('New user connected');
});
