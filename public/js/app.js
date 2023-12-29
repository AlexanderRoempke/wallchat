const socket = io();

document.getElementById('note-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const noteInput = document.getElementById('note-input');
  const note = noteInput.value.trim();

  if (note.length > 0 && note.length <= 2048) {
    socket.emit('postNote', note, () => {
      noteInput.value = '';
      noteInput.focus();
    });
  }
});

socket.on('note', function (note) {
  const notesContainer = document.getElementById('notes-container');
  const placeholder = document.getElementById('notes-placeholder');
  const noteElement = document.createElement('div');
  noteElement.classList.add('note-entry');
  noteElement.innerText = note.text;
  notesContainer.appendChild(noteElement);
  placeholder.style.display = 'none';
});
