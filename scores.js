//-----------scores page-------------
var clearbtn = document.getElementById("clearbtn");
var orderedScore = document.getElementById("highscores");

//display scores to score element
function displayscores() {
    var getscores = JSON.parse(window.localStorage.getItem("scores")) || [];

    getscores.forEach(function (showscore) {
        var lineItem = document.createElement("li");
        lineItem.textContent = showscore.initials + " : " + showscore.score;

        orderedScore.appendChild(lineItem);
    });
}

displayscores()

function clearHighscores() {
    window.localStorage.removeItem("scores");
    window.location.reload();
}

clearbtn.onclick = clearHighscores;