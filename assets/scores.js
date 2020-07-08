let enterInitials = document.querySelector("#enter-initials");
let scoresList = document.querySelector("#scores-list");
let clearBtn = document.querySelector("#clear");

getHighScores();

function renderScores() {

    scoresList.innerHTML = "";

    for (var i = 0; i < highScores.length; i++) {

        let p = document.createElement("p");
        p.classList.add("list-style");
        p.textContent = highScores[i].initials + " - " + highScores[i].userscore;
        scoresList.appendChild(p);

    }

    highScores.sort(function(a, b){return b.userscore-a.userscore});

}

function getHighScores() {

    let highScores = [];
    let storedScores = JSON.parse(localStorage.getItem("highscores"));

    if(storedScores !== null) {
        highScores = storedScores;
    }

    renderScores();
}

clearBtn.addEventListener("click", function(event) {

    var pList = document.querySelectorAll(".list-style");
    event.preventDefault();

    for (var i = 0; i < pList.length; i++) {
        pList[i].remove();
    }
    
});