const inputEmail = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const card = document.querySelector('.card');
const btn = document.querySelector('.btn');
const background = document.querySelector('.background');
const imgBtn = document.querySelector('.img-btn');
const wrong = document.querySelector('.wrong');
const wrongEmail = document.querySelector('.wrong-email');

window /
	addEventListener('contextmenu', (e) => {
		e.preventDefault();
		alert('Right click disabled');
	});

const password = 'test1234';

btn.addEventListener('click', () => {
	const inputUser = passwordInput.value;
	const length = inputUser.length;
	const email = inputEmail.value;

	if (length <= 8) {
		checkEmail(email);
		checkPassword(inputUser, email);
	}
});

function checkPassword(inputUser, email) {
	if (inputUser === password && isValidEmail(email)) {
		showImage();
	} else {
		passwordInput.style.border = '3px solid red';
		wrong.style.display = 'block';
	}
}

function checkEmail(email) {
	if (!isValidEmail(email)) {
		wrongEmail.style.display = 'block';
	} else {
		wrongEmail.style.display = 'none';
	}
}

function isValidEmail(email) {
	const regex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return regex.test(email);
}

function showImage() {
	card.style.display = 'none';
	imgBtn.style.display = 'block';
	background.style.filter = 'none';
}
