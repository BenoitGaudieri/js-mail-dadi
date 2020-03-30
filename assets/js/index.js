// var title = document.getElementById("title");
// var titletext = title.innerHTML;
// var modTitleText = "";

// for (var i = 0; i < titletext.length; i++) {
//     modTitleText +=
//         '<span class="char-' + (i + 1) + '">' + titletext[i] + "</span>";
// }

// title.innerHTML = modTitleText;

// Declaration
var submit = document.getElementById("submit");
var arr = [
    "michele@boolean.careers",
    "fabio@boolean.careers",
    "roberto@boolean.careers"
];

// Event button
submit.addEventListener("click", function() {
    var email = document.getElementById("login").value;
    var emailFound;
    var showResult = document.getElementById("result");

    // Array iteration
    for (var i = 0; i < arr.length; i++) {
        if (email == arr[i]) {
            emailFound = true;
        }
    }

    if (emailFound) {
        showResult.className = "show";
        showResult.innerHTML = "Bentornato " + email;
    } else {
        showResult.className = "show";
        showResult.innerHTML = email + " non è nel sistema!";
    }
});

// Random
var rollDice = document.getElementById("rollDice");

rollDice.addEventListener("click", function() {
    var rollResult = document.getElementById("rollResult");
    var playerRoll = Math.floor(Math.random() * 6) + 1;
    var pcRoll = Math.floor(Math.random() * 6) + 1;
    console.log(playerRoll);
    console.log(pcRoll);

    if (playerRoll > pcRoll) {
        rollResult.className = "show";
        rollResult.innerHTML = `The player rolled ${playerRoll} while the pc rolled ${pcRoll}<p>Player wins!</p>`;
    } else if (playerRoll < pcRoll) {
        rollResult.className = "show";
        rollResult.innerHTML = `The player rolled ${playerRoll} while the pc rolled ${pcRoll}<p>PC wins!</p>`;
    } else {
        rollResult.className = "show";
        rollResult.innerHTML = `The player rolled ${playerRoll} while the pc rolled ${pcRoll}<p>It's a draw!</p>`;
    }
});
