var score = document.querySelector(".score");
var timeEl = document.querySelector(".timeLeft");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("#questionList");
var questionListPara = document.querySelector("#question-title");
var questionListChoice = document.querySelector("#choices");
var qandaform = document.querySelector("#QandA");
var currentQuestionIndex = 0;
var answerA = document.getElementById("questionList.choices(a)");
var answerB = document.getElementById("questionList.choices(b)");
var answerC = document.getElementById("questionList.choices(c)");
var answerD = document.getElementById("questionList.choices(d)");

var secondsLeft = 76;

function startButton() {
    var mainscreenEl = document.querySelector(".main-screen");
    //when start button is clicked, hide main screen
    mainscreenEl.setAttribute("style", "display: none;");
    qandaform.removeAttribute("class");
     
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
    var questionListText = document.createTextNode(questionList[0].title);
    questionListPara.appendChild(questionListText);
    console.log(questionListText);

    answerA.textContent = questionList[0].choices.a;
    answerB.textContent = questionList[0].choices.b;
    answerC.textContent = questionList[0].choices.c;
    answerD.textContent = questionList[0].choices.d;

    //go through questions 
    //for (var i = 0; i < questionList.length; i++) {
        //need if statement, user input response variable 

    //compare answers 
        var userChoice = event.target;
        if (userClick === questionList[i].choices.answer) {
            score.textContent+=1;
        }
        else {
            secondsLeft-10;
        }
        // var userChoice = ($(event.target).val());
        // // Compare the computer and user guess
        // if(computerChoice === userChoice) {
        //   //get result id for result element on html
        //   $("#result").text("you are correct.");

        // }

        // else {
        //   $("#result").text("you are wrong");
        // }

        //need else statement, if user input is not the answer chosen

    };
}




document.addEventListener("click", function (event) {
    if (event.target.matches("#start")) {
        startButton();
        setTime();
        initializeQuestion()
        
    }
    //stops function to end it (retire function)
    return;
});





// for (var i = 0; i < questionList.length; i++) {
//     var response = 

//     if (response === questionList[i].answer) {
//         score++;
//     }

//     else {
//         timer--;

//     }
// }
