let tabs = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		tabContent.forEach((content) => {
			content.classList.remove('active');
		});

		tabs.forEach((tab) => {
			tab.classList.remove('active');
		});

		tabs[index].classList.add('active');
		tabContent[index].classList.add('active');
	});
});
