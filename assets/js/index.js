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
