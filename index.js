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

sr.reveal('.container, .product, .footer',{delay:200, origin:'bottom'});

document.querySelector('.scroll-top').addEventListener('click', function (event) {
	event.preventDefault(); // Prevent default anchor behavior
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth', // Smooth scrolling
	});
  });

// Set the target date for the countdown
const targetDate = new Date("April 9, 2025 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  } else {
    document.getElementById("timer").innerHTML = "<p>Offer Expired!</p>";
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);