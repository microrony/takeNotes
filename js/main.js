// Varitables
let form = document.getElementById('takeNote');
let notes = document.querySelector('#notes .container');
let search = document.getElementById('search');

// Functions
const takeNote = (e) => {
  e.preventDefault();
  let noteContent = document.getElementById('noteContent').value;
  let note = document.createElement('div');
  note.className = 'note';

  let body = document.createElement('p');
  body.className = 'body';
  body.appendChild(document.createTextNode(noteContent));

  note.appendChild(body);
  notes.appendChild(note);
};

// Events
form.addEventListener('submit', takeNote);
// search.addEventListener('keyup', findNote);
