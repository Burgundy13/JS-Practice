let textareaEl = document.querySelector('#textarea');
let total = document.querySelector('.total');
let remaining = document.querySelector('.remaining');

textareaEl.addEventListener('keyup', () => {
	updateCounter();
});

function updateCounter() {
	total.innerHTML = textareaEl.value.length;

	remaining.innerHTML =
		textareaEl.getAttribute('maxlength') - textareaEl.value.length;
}

updateCounter();
