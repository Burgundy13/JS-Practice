window.addEventListener('beforeunload', checkDB);

const mainView = document.querySelector('.mainView');
const notesView = document.querySelector('.notes-view');
const addNoteView = document.querySelector('#addNoteView');
const titleInput = document.querySelector('input[name="title"]');
const dateInput = document.querySelector('input[name="date"]');
const timeInput = document.querySelector('input[name="time"]');
const textAreaInput = document.querySelector('textarea[name="textarea"]');
const addNoteBtn = document.querySelector('#add-note');

const searchInput = document.querySelector('input[type="search"]');
let saveBtn = document.querySelector('#save-btn');

createTable();

notesView.addEventListener('click', showNotesView);
addNoteBtn.addEventListener('click', showAddNotesView);
saveBtn.addEventListener('click', saveNote);
searchInput.addEventListener('keyup', searchNote);

function showNotesView() {
	mainView.style.display = 'flex';
	addNoteView.style.display = 'none';
}

function showAddNotesView() {
	mainView.style.display = 'none';
	addNoteView.style.display = 'flex';
}

function saveNote() {
	notes.push({
		title: titleInput.value.toLowerCase(),
		date: dateInput.value,
		time: timeInput.value,
		text: textAreaInput.value,
		done: 'Done',
		delete: 'Delete',
		opacity: 1,
	});

	titleInput.value = '';
	dateInput.value = '';
	textAreaInput.value = '';
	timeInput.value = '';

	createTable();
	showNotesView();
}

function createTable(filterNotes = notes) {
	let text = '';
	filterNotes.forEach((note, index) => {
		text += `
		<div class="col-4 py-4 m-3">
							<div class="card" style=opacity:${note.opacity}>
								<div class="card-header text-center py-3">
									<h3>${note.title}</h3>
								</div>
								<div class="card-header calc-2 text-center py-3">
									<div class="col-5">
										<button class="btn btn-info form-control disabled">
											${note.date}
										</button>
									</div>
									<div class="col-5">
										<button class="btn btn-info form-control disabled">
											${note.time}
										</button>
									</div>
								</div>
	
								<div class="card-body py-4">
									<p class="card-text">${note.text}</p>
								</div>
								<div class="card-footer calc-2 py-3">
									<div class="col-5">
										<button id="done" data-id="${index}" class="btn btn-success form-control">${note.done}</button>
									</div>
									<div class="col-5">
										<button id="delete" data-id="${index}" class="btn btn-danger form-control">${note.delete}</button>
									</div>
								</div>
							</div>
						</div>
		`;
	});

	mainView.innerHTML = text;
	addEventListeners();
}

function addEventListeners() {
	const doneBtns = document.querySelectorAll('#done');
	const deleteBtns = document.querySelectorAll('#delete');

	for (let i = 0; i < doneBtns.length; i++) {
		doneBtns[i].addEventListener('click', markAll);
		deleteBtns[i].addEventListener('click', deleteNote);
	}
}

function markAll() {
	let id = this.getAttribute('data-id');

	if (notes[id].opacity == '1') {
		notes[id].opacity = '0.3';
		createTable();
	} else {
		notes[id].opacity = '1';
		createTable();
	}
}

function deleteNote() {
	let id = this.getAttribute('data-id');
	notes.splice(id, 1);
	createTable();
	showNotesView();
}

function searchNote() {
	let term = this.value.toLowerCase();

	let filterNotes = notes.filter((note) => {
		if (note.title.indexOf(term) > -1) {
			return true;
		} else {
			return false;
		}
	});

	createTable(filterNotes);
}

function checkDB() {
	localStorage.notes = JSON.stringify(notes);
}
