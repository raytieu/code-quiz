// HTML DOM Variable Objects
let scoresList = document.querySelector("#scores-list");
let clearBtn = document.querySelector("#clear");

// Array to store high scores to and from local storage
let highScores = [];

// Retrieve high scores from local storage and render them upon loading page
getHighScores();

// Function to retrieve high scores from local storage
function getHighScores() {

    highScores = JSON.parse(localStorage.getItem("highscores"));
    renderScores();

}

// Function to render high scores onto HTML page, sorting them in descending order
function renderScores() {

    highScores.sort(function(a, b){return b.userscore-a.userscore});

    for (var i = 0; i < highScores.length; i++) {
        let p = document.createElement("p");
        p.classList.add("list-style");
        p.textContent = highScores[i].initials + " - " + highScores[i].userscore;
        scoresList.appendChild(p);
    }

}

// Button to clear local storage and HTML page of scores
clearBtn.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    scoresList.innerHTML = "";
});
