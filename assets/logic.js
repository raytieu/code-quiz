let quizBtn = document.querySelector("#quiz-button");
let hideFront = document.querySelector("#front-page");
let timeCounter = document.querySelector("#timer");
let questionPage = document.querySelector("#question-page");
let choice = document.querySelector("#choices");
let lastPage = document.querySelector("#last-page");
let timeLeft = document.querySelector("#time-left");
let finalScore = document.querySelector("#final-score");
let finishMessage = document.querySelector("#finish-msg");
let finalCorrect = document.querySelector("#corrects");

let correctCount = 0;
let questionNumber = 0;
let score = 0;
let time = 50;

quizBtn.addEventListener("click", startQuiz);

function startQuiz() {

    hideFront.setAttribute("style", "display: none;");
    timeCounter.classList.remove("invisible");
    questionPage.classList.remove("invisible");

    
    timeLeft.textContent = time;

    askQuestion();
    
    let countdown = setInterval(function() {
        time--;
        timeLeft.textContent = time;
        
        if (time === 0) {
            clearInterval(countdown);
        }
    }, 1000)   

}

function askQuestion() {

    let questions = document.querySelector("#questions");
    questions.innerHTML = questionSet[questionNumber].question;
    
    for (var i = 0; i < 4; i++) {

        let choicesBtn = document.createElement("button");
        choicesBtn.textContent = questionSet[questionNumber].choices[i];
        choicesBtn.setAttribute("value", questionSet[questionNumber].choices[i]);
        choicesBtn.classList.add("remove-button");
        choicesBtn.classList.add("go-next");
        choicesBtn.classList.add("btn-style");
        choice.appendChild(choicesBtn);
        let lineBreak = document.createElement("br");
        choice.appendChild(lineBreak);
        
    }

}

function initialsPage() {

    timeCounter.setAttribute("style", "display: none;");
    questionPage.setAttribute("style", "display: none;");
    lastPage.classList.remove("invisible");
    finalScore.textContent = score;
    finalCorrect.textContent = correctCount;

    if (score >= 900) {
        finishMessage.textContent = "Your Knowledge is Superb!";
        finishMessage.style.color = "green";
        finalScore.style.color = "green";
    }
    else if (score >= 600) {
        finishMessage.textContent = "Great Job!";
        finishMessage.style.color = "orange";
        finalScore.style.color = "orange";
    }
    else {
        finishMessage.textContent = "Try again for a higher score!";
        finishMessage.style.color = "red";
        finalScore.style.color = "red";
    }

    if (correctCount === 5) {
        finalCorrect.style.color = "green";
    }
    else if (correctCount >= 3) {
        finalCorrect.style.color = "orange";
    }
    else {
        finalCorrect.style.color = "red";
    }
}

choice.addEventListener("click", function(event) {
    if (event.target.value === questionSet[questionNumber].answer) {
        score = score + 150;
        correctCount ++;
    }
    questionNumber++;

    let removeBtn = document.querySelectorAll(".remove-button");
    let removeBr = document.querySelectorAll("br")

    for (var i = 0; i < removeBtn.length; i++) {
        removeBtn[i].remove();
        removeBr[i].remove();
    }
    
    if (questionNumber === 5) {
        if (correctCount === 0) {
            score = 0;
            initialsPage();
        }
        else {
            time = parseInt(time);
            score = score + time * 5;
            initialsPage();
        }
    }
    else {
        askQuestion();
    }
    console.log(score);
});

