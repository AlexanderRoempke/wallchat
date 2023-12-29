module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New WebSocket connection');

    // Logic for when a client connects
    socket.on('join', ({ username, room }, callback) => {
      const { error, user } = addUser({ id: socket.id, username, room });

      if (error) {
        return callback(error);
      }

      socket.join(user.room);

      socket.emit('message', generateMessage('Admin', 'Welcome!'));
      socket.broadcast.to(user.room).emit('message', generateMessage('Admin', `${user.username} has joined!`));

      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room)
      });

      callback();
    });

    socket.on('disconnect', () => {
      console.log('User has disconnected');
    });
  });
};
