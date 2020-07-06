let quizBtn = document.querySelector("#quiz-button");
let hideFront = document.querySelector("#front-page");
let timeCounter = document.querySelector("#timer");
let questionPage = document.querySelector("#questions");

quizBtn.addEventListener("click", function() {
    hideFront.setAttribute("style", "display: none;");
    timeCounter.classList.remove("invisible");
    questionPage.classList.remove("invisible"); 
    startTimer();
});

function startTimer() {
    let timeLeft = document.querySelector("#time-left");
    let time = 10;
    timeLeft.textContent = time;
    
    let countdown = setInterval(function() {
        time--;
        timeLeft.textContent = time;
        
        if (time === 0) {
            clearInterval(countdown);
        }
    }, 1000)
    

       
}