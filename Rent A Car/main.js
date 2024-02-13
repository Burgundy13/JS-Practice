const submit = document.querySelector('#submit');
const output = document.querySelector('#output');

const prices = {
	audi: 200,
	bmw: 220,
	hyundai: 150,
	mercedes: 180,
};

submit.addEventListener('click', () => {
	let car = document.querySelector('select').value;
	let dateOne = new Date(document.querySelector('#date-1').value);
	let dateTwo = new Date(document.querySelector('#date-2').value);

	output.style.opacity = '1';

	if (car !== '' && dateOne.getTime() && dateTwo.getTime()) {
		let time = dateTwo.getTime() - dateOne.getTime();
		let days = Math.abs(time / (1000 * 3600 * 24));

		output.innerHTML = `For car <span>${car}</span>, price for renting for <span>${days}</span> days is <span>${
			prices[car] * days
		}&euro; </span>`;
	}
});
