let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
});

    slides[index].style.display = 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function autoSlide() {
    nextSlide();
}

setInterval(autoSlide, 5000);
showSlide(currentIndex);


document.addEventListener("DOMContentLoaded", function () {
    var dropdownBtn = document.querySelector('.dropdown-btn');
    var navList = document.querySelector('.nav-list');

    dropdownBtn.addEventListener('click', function () {
        navList.style.display = (navList.style.display === 'none' || navList.style.display === '') ? 'flex' : 'none';
    });
});
