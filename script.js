var scoreEl = document.querySelector("#score");
var timeEl = document.querySelector(".timeLeft");
var startBtn = document.getElementById("start");

var questionListPara = document.querySelector("#question-title");
var questionListChoice = document.querySelector("#choices");

var currentQuestionIndex = 0;
var qandaform = document.querySelector("#QandA");
var questionsEl = document.querySelector("#questionList");
//to display
var labelA = document.getElementById("labelA");
var labelB = document.getElementById("labelB");
var labelC = document.getElementById("labelC");
var labelD = document.getElementById("labelD");

var choiceA = document.querySelector("#ans1");
var choiceB = document.querySelector("#ans2");
var choiceC = document.querySelector("#ans3");
var choiceD = document.querySelector("#ans4");

var userChoice = "";
var correctAnswer ="";
// console.log(questionList.choices.a);

var questionIndex = 0;
var score = 0;
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
    var thisQuestion = questionList[currentQuestionIndex];
    // var questionListText = document.createTextNode(thisQuestion.title);
    questionListPara.innerHTML = thisQuestion.title;
    // console.log(questionListText);
    // scoreEl.textContent ="Score: " + score;
    labelA.textContent = thisQuestion.choices.a;
    labelB.textContent = thisQuestion.choices.b;
    labelC.textContent = thisQuestion.choices.c;
    labelD.textContent = thisQuestion.choices.d;

    correctAnswer =  thisQuestion.correct;
    //go through questions 
    //for (var i = 0; i < questionList.length; i++) {
        //need if statement, user input response variable 
        
};
    

// var userChoice = document.querySelector("#QandA");    
// userChoice.addEventListener("click", compareChoice);

function compareChoice(event) {
    var button = event.target;
    userChoice = button.dataset.answer;
    onSubmit();
};

function onSubmit(){
    if (userChoice === correctAnswer) {
        score+=1;
        scoreEl.innerHTML ="Score: " + score;
        // console.log("choice" + choice) //string of choice, and variable choice
        // console.log("questionList" + questionList[0].choices.b)
     
    }
    else {
        scoreEl.innerHTML ="Score: " + score;
        secondsLeft-=10;
    }


    currentQuestionIndex++;
    if (currentQuestionIndex < questionList.length){
        initializeQuestion();
    }else {
        //end game
    }
}


startBtn.addEventListener("click", function (event) {
    // if (event.target.matches("#start")) {
        startButton();
        setTime();
        initializeQuestion()
    
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
