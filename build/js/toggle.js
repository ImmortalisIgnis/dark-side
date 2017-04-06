var hamburger = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__list");

hamburger.addEventListener("click", function(event) {
	event.preventDefault();
	if (menu.classList.contains("main-nav__list--closed")) {
		hamburger.classList.remove("main-nav__toggle--closed");
		menu.classList.add("main-nav__list--open");
		menu.classList.remove("main-nav__list--closed");
		hamburger.classList.add("main-nav__toggle--open");
	}
	else {
		hamburger.classList.add("main-nav__toggle--closed");
		menu.classList.remove("main-nav__list--open");
		menu.classList.add("main-nav__list--closed");
		hamburger.classList.remove("main-nav__toggle--open");
	}
	
});
