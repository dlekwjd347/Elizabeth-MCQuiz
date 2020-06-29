var clearbtn = document.getElementById("clearbtn");
var orderedScore = document.getElementById("highscores");

//display scores to score element
function displayscores() {
    var getscores = JSON.parse(window.localStorage.getItem("scores")) || [];
    getscores.sort(function(a, b) {
        return b.score - a.score;
      });
    

    getscores.forEach(function (score) {
        var lineItem = document.createElement("li");
        lineItem.textContent = score.initials + " : " + score.score;

        orderedScore.appendChild(lineItem);
    });

// displayscores()
}

function clearHighscores() {
    window.localStorage.removeItem("scores");
    window.location.reload();
}

clearbtn.onclick = clearHighscores;