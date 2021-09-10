const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);
const apiRoutes = require('./routes/apiRoutes')
io.on('connection', onConnection);

function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}
app.use('/api',apiRoutes)
const port = 5000;
server.listen(port, () => console.log(`server is running on port ${port}`));