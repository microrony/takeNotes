// Varitables
let form = document.getElementById('takeNote');
let notes = document.querySelector('#notes .container');

// Functions
const takeNote = (e) => {
  e.preventDefault();
  let note = document.createElement('div');
  let noteContent = document.getElementById('noteContent').value;
  note.className = 'note';

  let body = document.createElement('p');
  body.className = 'body';
  body.appendChild(document.createTextNode(noteContent));

  note.appendChild(body);
  notes.appendChild(note);
};

// Events
form.addEventListener('submit', takeNote);