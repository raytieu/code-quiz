var quizBtn = document.querySelector("#quiz-button");
var hideFront = document.querySelector("#front-page");
var visible1 = document.querySelector("#timer");
var visible2 = document.querySelector("#questions");

quizBtn.addEventListener("click", function() {
    hideFront.setAttribute("style", "display: none;");
    visible1.classList.remove("invisible");
    visible2.classList.remove("invisible");
    
});