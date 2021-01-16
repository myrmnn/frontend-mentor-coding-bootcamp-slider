const next = document.querySelectorAll(".slider__nav--right");
const prev = document.querySelectorAll(".slider__nav--left");
const slides = document.querySelectorAll(".container");

let index = 0;
display(index);
function display(index) {
	slides.forEach((slide) => {
		slide.style.display = "none";
	});
	slides[index].style.display = "block";
}

function nextSlide() {
	index++;

	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
}

function prevSlide() {
	index--;

	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
}

next.forEach((slide) => slide.addEventListener("click", nextSlide));

prev.forEach((slide) => slide.addEventListener("click", prevSlide));
