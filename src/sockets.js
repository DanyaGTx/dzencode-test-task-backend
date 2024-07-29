const { Server } = require('socket.io');

const setupSocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*"
    }
  });

  io.on('connection', (socket) => {
    console.log('a user connected', io.engine.clientsCount);

    io.emit("activeTabs", io.engine.clientsCount);

    socket.on('disconnect', () => {
      io.emit("activeTabs", io.engine.clientsCount);
    });
  });

  return io;
}

module.exports = setupSocketServer;
