import $ from "jquery";

const mainMenuBtn = document.querySelector('.main-menu__btn');
const mainMenu = document.querySelector('.main-menu');

mainMenuBtn.addEventListener('click', ()=> {
	mainMenuBtn.classList.toggle('active');
	mainMenu.classList.toggle('main-menu--active');
});

mainMenu.addEventListener('click', (evt)=> {
	evt.preventDefault();
	let target = evt.target.closest('.main-menu__item-sub');
	let target1 = evt.target.closest('.sub-link');
	if(!target1) {
		return;
	}else {
		let menu = target.querySelector('.sub-menu');
		$(menu).slideToggle('slow');
	}
})
