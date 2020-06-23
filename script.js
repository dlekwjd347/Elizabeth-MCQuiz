var score = 0;
var timeEl = document.querySelector(".timeLeft");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById(".questionList");
var currentQuestionIndex = 0;

var secondsLeft = 76;

function startButton() {
    var mainscreenEl = document.querySelector(".main-screen");
    //when start button is clicked, hide main screen
    mainscreenEl.setAttribute("style", "display: none;");
    //when start button is clicked, timer starts
    questionsEl.style.visibility = "hidden"
    initializeQuestion()
    // questionsEl.setAttribute("style", "display: block;");
}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = `Time Remaining: ${secondsLeft} seconds`; 
        // score.textContent= "";
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

function initializeQuestion() {
    // var currentQuestion = questionList[currentQuestionIndex];
    // var questionEl = document.getElementById("question-title");
    // questionEl.textContent = currentQuestion.title;

    // var currentAnswer = questionList[currentAnswerIndex];
    // var answerEl = document.getElementById("choices");
    // answerEl.textContent = currentAnswer.questionList.choices;
    questionsEl.style.visibility = "visible"



}

document.addEventListener("click", function (event) {
    if (event.target.matches("#start")) {
        startButton();
        setTime();
        
    }
    //stops function to end it (retire function)
    return;
});





// for (var i = 0; i < questions.length; i++) {
//     var response = 

//     if (response === questions[i].answer) {
//         score++;
//     }

//     else {
//         timer--;

//     }
// }
