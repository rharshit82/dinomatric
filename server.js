const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);
const apiRoutes = require('./routes/apiRoutes')
const db = require('./db/db')
const path = require("path");

require('dotenv').config()
app.use(express.json())

db()
io.on('connection', onConnection);


function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}
app.use('/api',apiRoutes)


app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const port = 5000;
server.listen(port, () => console.log(`server is running on port ${port}`));