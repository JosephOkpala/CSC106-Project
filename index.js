const header = document.querySelector("header");

window.addEventListener("scroll", function() {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let menu =  document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

const sr = ScrollReveal ({
	distance: '60px',
	duration: 2500,
	reset: true
});

sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-img',{delay:200, origin:'right'});

sr.reveal('.container, .product,',{delay:200, origin:'bottom'});

document.querySelector('.scroll-top').addEventListener('click', function (event) {
	event.preventDefault(); // Prevent default anchor behavior
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth', // Smooth scrolling
	});
  });