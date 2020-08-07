(() => {


    const $slideWrapper = document.querySelector(".container")
    const $slideContainer = document.querySelector(".slide_container");
    const $slide = document.querySelectorAll(".slide");
    const slideCount = $slide.length;
    let topHeight = 0;
    let currentIndex = 0;
    let $timer = undefined; //아무것도 지정안할시 오류날수 있음
    let $pagerHTML = "";
    const $pager = document.querySelector(".pager");
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

    };

    for (let i = 0; i < slideCount; i++) {
        $slide[i].style.left = i * 100 + "%";
        $pager.innerHTML += `<span>${i + 1}</span>`
    };
    const pageBtn = document.querySelectorAll(".pager span");


    // 제일 중요한 동작 goToSlide
    function goToSlide(idx) {
        $slideContainer.classList.add("animated");
        $slideContainer.style.left = idx * -100 + "%";

        currentIndex = idx;

        for (let i = 0; i < pageBtn.length; i++) {
            pageBtn[i].classList.remove("active");
        }
        pageBtn[idx].classList.add("active");

    };
    goToSlide(0); //처음 파일 열 때 페이저 표시위해



    prev.addEventListener("click", function () {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(slideCount - 1);
        }
    });

    next.addEventListener("click", function () {
        if (currentIndex < slideCount - 1) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0);
        }
    });



    calculateTallestSlide();
    autoSlide();

    function autoSlide() {
        $timer = setInterval(function () {

            let nextIdx = (currentIndex + 1) % slideCount;
            goToSlide(nextIdx);
        }, 3000)
    };


    $slideWrapper.addEventListener("mouseenter", function () {
        clearInterval($timer);
    });


    $slideWrapper.addEventListener("mouseleave", function () {
        autoSlide();
    });



    //pager



    for (let i = 0; i < pageBtn.length; i++) {
        pageBtn[i].addEventListener("click", function (e) {
            //innerText 내용 반환 A.innerText / A.innerText = 'B';
            //innerHTML 의 태그를 반환 A.innerHTML / A.innerHTML = '<h2>'
            console.log(e.target.innerText - 1)
            goToSlide(e.target.innerText - 1);

        })
    }







})();