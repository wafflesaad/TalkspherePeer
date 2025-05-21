const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();

const server = require('http').createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/'
});

app.use('/', peerServer);

const PORT = process.env.PORT || 4002;
server.listen(PORT, () => {
  console.log(`PeerJS server running on port ${PORT}`);
});