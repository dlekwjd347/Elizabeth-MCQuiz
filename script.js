var score = 0;
var timeEl = document.querySelector(".timeLeft");
var questionsEl = document.querySelector("questions");
var startBtn = document.getElementById("start");

var secondsLeft = 50;

function startButton() {
    var startscreenEl = document.querySelector(".start-screen");
    //when start button is clicked, hide start screen
    startscreenEl.setAttribute("style", "display: none;");
    //when start button is clicked, timer starts
    
    // setTimeout(function(){
    //     initializeQuestion();
        
    // }, 1000);

}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = `Time Remaining: ${secondsLeft} seconds`; 
        // score.textContent= "";
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            // alert("Time's up!")
        }
    }, 1000);
}

document.addEventListener("click", function (event) {
    if (event.target.matches("#start")) {
        startButton();
        setTime();
    }
    //stops function to end it (retire function)
    return
})

function initializeQuestion() {



}








// for (var i = 0; i < questions.length; i++) {
//     var response = 

//     if (response === questions[i].answer) {
//         score++;
//     }

//     else {
//         timer--;

//     }
// }
