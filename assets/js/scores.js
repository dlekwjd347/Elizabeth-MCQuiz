var clearbtn = document.getElementById("clearbtn");
var orderedScore = document.getElementById("highscores");

//display scores to score element
function displayscores() {
    var getscores = JSON.parse(window.localStorage.getItem("scores")) || [];
    var selectionSort = (scores) => {
        var scorelength = scores.length;
        for (var i = 0; i < scorelength; i++) {
            var min = i;
            for (var j = i + 1; j < scorelength; j++) {
                if (scores[min].scorelength > arr[j].scorelength) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = scores[i];
                scores[i] = scores[min];
                scores[min] = tmp;
            }
        }
        return selectionSort;
    }

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