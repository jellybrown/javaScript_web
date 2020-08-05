const btnCollaspse = document.querySelector("#btn-collapse");
const heading = document.querySelectorAll(".panel-heading");
const question = document.querySelectorAll('.panel-question');
const answer = document.querySelectorAll('.panel-body');

for (let i = 0; i < heading.length; i++) {
    heading[i].addEventListener("click", function (e) {
        for (let j = 0; j < question.length; j++) {
            question[j].classList.remove("active");
            e.target.parentNode.classList.add("active");
            activateBody(); //작성해야함
        }
    })
};


function activateBody() {
    // panel-body 모두 안보이도록    
    for (let x = 0; x < answer.length; x++) {
        answer[x].style.display = "none";

    }
    // active된 애의 자식중 panel-body가 나오도록
    const activePanel = document.querySelector(".panel-question.active .panel-body");
    activePanel.style.display = "block";

}


function collapse() {
    for (let i = 0; i < answer.length; i++) {
        answer[i].style.display = "none";
    }
}

btnCollaspse.addEventListener("click", collapse);
activateBody();