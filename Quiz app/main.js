let data = [
	{
		question: 'Koji je glavni grad Srbije?',
		a: 'Beograd',
		b: 'Nis',
		c: 'Kragujevac',
		d: 'Subotica',
		correct: 'a',
	},
	{
		question: 'Najduza reka na svetu je?',
		a: 'Nil',
		b: 'Amazon',
		c: 'Jangcekjang',
		d: 'Dunav',
		correct: 'b',
	},
	{
		question: 'AgG je oznaka kog hemijskog elementa?',
		a: 'Zlato',
		b: 'Platina',
		c: 'Srebro',
		d: 'Vodonik',
		correct: 'c',
	},
];

let quiz = document.querySelector('#quiz');
let questionEl = document.querySelector('#question');
let answerEls = document.querySelectorAll('.answer');
let aText = document.querySelector('#a-text');
let bText = document.querySelector('#b-text');
let cText = document.querySelector('#c-text');
let dText = document.querySelector('#d-text');
let submitBtn = document.querySelector('#submit');

let current = 0;
let score = 0;

function loadQuiz() {
	deselectAnswers();
	let currentData = data[current];

	questionEl.innerHTML = currentData.question;
	aText.innerHTML = currentData.a;
	bText.innerHTML = currentData.b;
	cText.innerHTML = currentData.c;
	dText.innerHTML = currentData.d;
}
loadQuiz();

function deselectAnswers() {
	answerEls.forEach((el) => {
		el.checked = false;
	});
}

function getAnswer() {
	let answer;
	answerEls.forEach((answerEl) => {
		if (answerEl.checked) answer = answerEl.id;
	});
	return answer;
}

submitBtn.addEventListener('click', () => {
	const answer = getAnswer();
	if (answer) {
		if (answer === data[current].correct) {
			score++;
		}

		current++;

		if (current < data.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `<h2>Ogovorili se na ${score}/${data.length}</h2>
			<button onclick="location.reload()">Reset</button>`;
		}
	}
});
