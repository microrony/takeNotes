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

const findNote = (e) => {
  let text = e.target.value.toLowerCase();
  let items = notes.querySelector('.note');
  Array.from(items).forEach((item) => {
    let itemContent = item.firstChild.textContent;
    if (itemContent.toLowerCase().indexOf(text) != -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
  console.log(item.firstChild.textContent);*
};

// Events
form.addEventListener('submit', takeNote);
search.addEventListener('keyup', findNote);
