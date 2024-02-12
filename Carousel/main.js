let imgContainer = document.querySelector('.image-container');
let leftBtn = document.querySelector('#left');
let rightBtn = document.querySelector('#right');
let img = document.querySelectorAll('.image-wrap');
let counter = 0;

let interval = setInterval(start, 2000);

function start() {
	counter++;

	change();
}

function change() {
	if (counter > img.length - 1) {
		counter = 0;
	} else if (counter < 0) {
		counter = img.length - 1;
	}
	imgContainer.style.transform = `translateX(${-counter * 500}px)`;
}

function stopInterval() {
	clearInterval(interval);
}

rightBtn.addEventListener('click', () => {
	counter++;
	change();
	stopInterval();
});

leftBtn.addEventListener('click', () => {
	counter--;
	change();
	stopInterval();
});

imgContainer.addEventListener('mouseenter', () => {
	clearInterval(interval);
});

imgContainer.addEventListener('mouseleave', () => {
	interval = setInterval(start, 2000);
});
