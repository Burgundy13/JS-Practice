let textEl = document.querySelector('#main-text');
let speedEl = document.querySelector('#speed');

let text = 'Welcome to our practice!';
let i = 1;
let speed = 1000;

function writeText() {
	textEl.innerHTML = text.slice(0, i);
	i++;
	if (i > text.length) {
		i = 1;
	}
	setTimeout(writeText, speed);
}

writeText();

speedEl.addEventListener('input', (e) => {
	speed = 1000 / e.target.value;
});
