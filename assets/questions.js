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
    let time = 60;
    timeLeft.textContent = time;
    
    let countdown = setInterval(function() {
        time--;
        timeLeft.textContent = time;
        
        if (time === 0) {
            clearInterval(countdown);
        }
    }, 1000)    
}

let questionSet = [
    {question: "Which of the following is a JavaScript library?", choices: ["Python", "JQuery", "Bootstrap", "C++"], answer: "JQuery"},
    {question: "What type of file denotes a JavaScript file?", choices: [".js", ".css", ".json", ".java"], answer: ".js"},
    {question: "Which of the following would you use to write to the console in JavaScript?", choices: ["console.show", "console.log", "console.write", "console.print"], answer: "console.log"},
    {question: "When utilizing querySelector(), which of the following symbols would you use to refer to an id?", choices: [".", "<>", "$", "#"], answer: "#"},
    {question: "Which of the following is NOT a way to set a variable in JavaScript?", choices: ["let", "const", "make", "var"], answer: "make"}
];