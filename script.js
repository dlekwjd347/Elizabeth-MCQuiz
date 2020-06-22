var score = 0;
var timeEl = document.querySelector(".timeLeft");
var questionsEl = document.querySelector("questions");
var startBtn = document.getElementById("start");

var secondsLeft = 76;

function startButton() {
    var mainscreenEl = document.querySelector(".main-screen");
    //when start button is clicked, hide main screen
    mainscreenEl.setAttribute("style", "display: none;");
    //when start button is clicked, timer starts
    // initializeQuestion()
}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = `Time Remaining: ${secondsLeft} seconds`; 
        // score.textContent= "";
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's up!")
        }
    }, 1000);
}

function initializeQuestion() {
    var currentQuestion = document.querySelector(".questions");
    currentQuestion.textContent = "Test"

}

document.addEventListener("click", function (event) {
    if (event.target.matches("#start")) {
        startButton();
        initializeQuestion();
        setTime();
        
    }
    //stops function to end it (retire function)
    return
})





// for (var i = 0; i < questions.length; i++) {
//     var response = 

//     if (response === questions[i].answer) {
//         score++;
//     }

//     else {
//         timer--;

//     }
// }
