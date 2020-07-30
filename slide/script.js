const slideWrapper = document.querySelector(".container");
const slideContainer = document.querySelector(".slide-container");
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;
let currentIndex = 0;
let topHeight = 0;
const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");



// 슬라이드의 높이 확인하여 부모의 높이로 지정하기
function calculateTallestSlide() {

    for (let i = 0; i < slideCount; i++) {
        if (slides[i].offsetHeight > topHeight) {
            topHeight = slides[i].offsetHeight;
        }
    }

    slideWrapper.style.height = `${topHeight}px`;
    slideContainer.style.height = `${topHeight}px`;
}


// 슬라이드가 있으면 가로로 배열하기

calculateTallestSlide();