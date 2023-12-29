const { generateNote } = require('../utils/messages');

module.exports = (io, socket) => {
  // Listening for 'postNote' event from client
  socket.on('postNote', (noteContent, callback) => {
    if (noteContent) {
      // Generate a note object and emit it to all clients
      const note = generateNote(noteContent);
      io.emit('note', note);
      callback(); // Acknowledge the receipt of the note
    }
  });
};