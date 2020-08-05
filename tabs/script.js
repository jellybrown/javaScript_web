/*
tab-content 안의 div들 모두 안보이도록 한다.

링크를 클릭하면 클릭한 그 요소의 href속성의 값을 변수 tabTarget에 저장.
저장된 값에서 #을 삭제한다.
tabTarget = tabs-1

document.querySelector(tabs-1).style.display='block'
*/
const targetLink = document.querySelectorAll(".tab-menu a");
const tabContent = document.querySelectorAll("#tab-content > div");


for (let i = 0; i < targetLink.length; i++) {
    targetLink[i].addEventListener("click", function (e) {
        e.preventDefault();

        for (let j = 0; j < targetLink.length; j++) {
            targetLink[j].classList.remove("active");
        }

        e.target.classList.add("active");
        const orgTarget = e.target.getAttribute("href");
        const tabTarget = orgTarget.replace("#", ""); //#을 공백으로 바꿔서 저장


        for (let x = 0; x < tabContent.length; x++) {
            tabContent[x].style.display = "none";
        }

        document.getElementById(tabTarget).style.display = "block";
    })
}

document.getElementById('tabs-1').style.display = "block";