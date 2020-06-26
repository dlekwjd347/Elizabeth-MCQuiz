var scoreEl = document.querySelector("#score");
var timeEl = document.querySelector(".timeLeft");
var startBtn = document.getElementById("start");

var questionListPara = document.querySelector("#question-title");
var questionListChoice = document.querySelector("#choices");

var currentQuestionIndex = 0;
var qandaform = document.querySelector("#QandA");
var questionsEl = document.getElementById("#questionList");
//to display
var answerA = document.getElementById("questionList.choices(a)");
var answerB = document.getElementById("questionList.choices(b)");
var answerC = document.getElementById("questionList.choices(c)");
var answerD = document.getElementById("questionList.choices(d)");

var choiceA = document.querySelector("#ans1");
var choiceB = document.querySelector("#ans2");
var choiceC = document.querySelector("#ans3");
var choiceD = document.querySelector("#ans4");

// console.log(questionList.choices.a);

var questionIndex = 0;

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
    // console.log(questionListText);
    // scoreEl.textContent ="Score: " + score;
    answerA.textContent = questionList[0].choices.a;
    answerB.textContent = questionList[0].choices.b;
    answerC.textContent = questionList[0].choices.c;
    answerD.textContent = questionList[0].choices.d;
    choiceA.setAttribute("data-question", questionIndex);
    choiceB.setAttribute("data-question", questionIndex);
    choiceC.setAttribute("data-question", questionIndex);
    choiceD.setAttribute("data-question", questionIndex);
    //go through questions 
    //for (var i = 0; i < questionList.length; i++) {
        //need if statement, user input response variable 
        
    };
    

// var userChoice = document.querySelector("#QandA");    
// userChoice.addEventListener("click", compareChoice);

function compareChoice(event) {
    var button = event.value;
    var userChoice = button.getAttribute("data-answer");
    var questionId = parseInt(button.getAttribute("data-question"));
    console.log(button);
    console.log(userAnswer);
    console.log(questionId);
    questionList[questionId]["userChoice"] = userChoice;
    if (questionList[questionId]["userChoice"] === questionList[questionId]["answer"]) {
        score+=1;
        scoreEl.innerHTML ="Score: " + score;
        console.log("choice" + choice) //string of choice, and variable choice
        console.log("questionList" + questionList[0].choices.b)
     
    }
    else {
        scoreEl.innerHTML ="Score: ";
        secondsLeft-=10;
    }
};



startBtn.addEventListener("click", function (event) {
    // if (event.target.matches("#start")) {
        startButton();
        setTime();
        initializeQuestion()
        compareChoice()
        
    
    //stops function to end it (retire function)
    // return;
});
choiceA.addEventListener("click", compareChoice);
choiceB.addEventListener("click", compareChoice);
choiceC.addEventListener("click", compareChoice);
choiceD.addEventListener("click", compareChoice);






// for (var i = 0; i < questionList.length; i++) {
//     var response = 

//     if (response === questionList[i].answer) {
//         score++;
//     }

//     else {
//         timer--;

//     }
// }
