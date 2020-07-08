let enterInitials = document.querySelector("#enter-initials");
let scoresList = document.querySelector("#scores-list");
let clearBtn = document.querySelector("#clear");
let submitBtn = document.querySelector("#submit");

let highScores = [];
highScores.sort(function(a, b){return b-a});

getHighScores();

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    if (enterInitials === "") {
        return;
    }

    highScores.push(enterInitials);
    enterInitials.value = "";

    renderScores();
    storeScores();
});

function renderScores() {

    scoresList.innerHTML = "";

    for (var i = 0; i < highScores.length; i++) {

        let p = document.createElement("p");
        p.classList.add("list-style");
        p.textContent = highScores[i];
        scoresList.appendChild(p);

    }
}

function getHighScores() {

    let storedScores = JSON.parse(localStorage.getItem("highscores"));

    if(storedScores !== null) {
        highScores = storedScores;
    }

    renderScores();
}

function storeScores () {
    localStorage.setItem("highscores", JSON.stringify(highScores));
}

function link() {
    window.location = "scores.html";
}



// clearBtn.addEventListener("click", function(event) {
// var pList = document.querySelectorAll(".list-style");
// event.preventDefault();
// for (var i = 0; i < pList.length; i++) {
//     pList[i].remove();
// }
// });