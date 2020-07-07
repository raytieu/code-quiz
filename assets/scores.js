let initialsForm = document.querySelector("#initials-form");
let enterInitials = document.querySelector("#enter-initials");
let initialsList = document.querySelector("#initials-list");
let clearBtn = document.querySelector("#clear");

function addInitials() {

        let p = document.createElement("p");
        p.classList.add("list-style");
        p.textContent = enterInitials.value.trim();
        initialsList.appendChild(p);
    
}

initialsForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (enterInitials === "") {
        return;
    }

    addInitials();
    enterInitials.value = "";

    
});

clearBtn.addEventListener("click", function(event) {
    var pList = document.querySelectorAll(".list-style");
    console.log(pList);
    event.preventDefault();
    pList.remove();
});