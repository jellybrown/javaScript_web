const $slideWrapper = document.querySelector(".container")
const $slideContainer = document.querySelector(".slide_container");
const $slide = document.querySelectorAll(".slide");
const slideCount = $slide.length;
let topHeight = 0;
let currentIndex = 0;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

function calculateTallestSlide() {
    for (let i = 0; i < slideCount; i++) {
        if ($slide[i].offsetHeight > topHeight) {
            topHeight = $slide[i].offsetHeight;
        }
    }

    $slideWrapper.style.height = `${topHeight}px`
    $slideContainer.style.height = `${topHeight}px`


}

for (let i = 0; i < slideCount; i++) {
    $slide[i].style.left = i * 100 + "%";
}


function goToSlide(idx) {
    $slideContainer.style.left = idx * -100 + "%";
    $slideContainer.classList.add("animated");
    currentIndex = idx;
}











prev.addEventListener("click", function () {
    if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
    } else {
        goToSlide(slideCount - 1);
    }
})

next.addEventListener("click", function () {
    if (currentIndex < slideCount - 1) {
        goToSlide(currentIndex + 1);
    } else {
        goToSlide(0);
    }
})



calculateTallestSlide();
goToSlide(0);




// 슬라이드의 높이 확인하여 부모의 높이로 지정하기



// 슬라이드가 있으면 가로로 배열하기


// 슬라이드 이동 함수




// 버튼기능 업데이트 함수


//버튼을 클릭하면 슬라이드 이동시키기




//첫번째 슬라이드 먼저 보이도록 하기