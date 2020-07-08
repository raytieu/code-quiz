
let scoresList = document.querySelector("#scores-list");
let clearBtn = document.querySelector("#clear");

let highScores2 = [];

getHighScores();

function renderScores() {

    // scoresList.innerHTML = "";
    console.log(highScores2.length)
    for (var i = 0; i < highScores2.length; i++) {

        let p = document.createElement("p");
        p.classList.add("list-style");
        p.textContent = highScores2[i].initials + " - " + highScores2[i].userscore;
        scoresList.appendChild(p);
        console.log(highScores2[i].initials);
    }

    highScores2.sort(function(a, b){return b.userscore-a.userscore});
    
}

function getHighScores() {

    let storedScores = JSON.parse(localStorage.getItem("highscores"));

    if(storedScores !== null) {
        highScores2 = storedScores;
    }

    renderScores();
}

// clearBtn.addEventListener("click", function(event) {

//     var pList = document.querySelectorAll(".list-style");
//     event.preventDefault();

//     for (var i = 0; i < pList.length; i++) {
//         pList[i].remove();
//     }
    
// });