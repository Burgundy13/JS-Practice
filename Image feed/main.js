let box = document.querySelector('.container');
let unsplash = 'https://source.unsplash.com/random/';
let rows = 5;

for (let i = 0; i < rows * 4; i++) {
	let img = document.createElement('img');
	img.src = `${unsplash}${randomNumber()}x${randomNumber()}`;
	box.appendChild(img);
}

function randomNumber() {
	return Math.floor(Math.random() * 100) + 300;
}
