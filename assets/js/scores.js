//setting variables to element on score page
var clearbtn = document.getElementById("clearbtn");
var orderedScore = document.getElementById("highscores");

//display scores to score element on score page
function displayscores() {
    //parse object of arrays in local storage or else if empty will just be empty
    var getscores = JSON.parse(window.localStorage.getItem("scores")) || [];
    //sorts scores in numerical order
    getscores.sort(function(a, b) {
        return b.score - a.score;
      });
    
    //for each new score, a new line item to display the score is created
    getscores.forEach(function (score) {
        var lineItem = document.createElement("li");
        lineItem.textContent = score.initials + " : " + score.score;

        orderedScore.appendChild(lineItem);
    });


}

function clearHighscores() {
    window.localStorage.removeItem("scores");
    window.location.reload();
}

clearbtn.onclick = clearHighscores;

displayscores()