const { Server } = require('socket.io');

const setupSocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*"
    }
  });

  io.on('connection', (socket) => {
    console.log('a user connected', io.engine.clientsCount);
    setTimeout(() => {
      io.emit("activeTabs", io.engine.clientsCount);
    }, 100);

    socket.on('disconnect', () => {
  
      setTimeout(() => {
        io.emit("activeTabs", io.engine.clientsCount);
      }, 100);
    });
  });

  return io;
}

module.exports = setupSocketServer;
