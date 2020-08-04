const btnCollaspse = document.querySelector("#btn-collapse");
const heading = document.querySelectorAll(".panel-heading");
const question = document.querySelectorAll('.panel-question');
const answer = document.querySelectorAll('.panel-body');


function clickEvent() {

}


for (let i = 0; i < heading.length; i++) {
    heading[i].addEventListener("click", function (e) {
        for (let j = 0; j < question.length; j++) {
            question[j].classList.remove("active");
            e.target.parentNode.classList.add("active");
            activateBody(); //작성해야함
        }
    })
}