const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
	counter.innerHTML = '0';

	const update = () => {
		const target = +counter.getAttribute('data-target');
		const c = +counter.innerHTML;
		const i = target / 500;

		if (c < target) {
			counter.innerHTML = `${Math.ceil(c + i)}`;
			setTimeout(update, 1);
		} else {
			counter.innerHTML = target;
		}
	};

	update();
});
