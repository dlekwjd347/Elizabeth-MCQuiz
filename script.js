//select elements on HTML page
var scoreEl = document.querySelector("#score");
var timeEl = document.querySelector(".timeLeft");
var startBtn = document.getElementById("start");
var questionListPara = document.querySelector("#question-title");
var questionListChoice = document.querySelector("#choices");
var qandaform = document.querySelector("#QandA");
var questionsEl = document.querySelector("#questionList");
//select ids on homepage to set label
var labelA = document.getElementById("labelA");
var labelB = document.getElementById("labelB");
var labelC = document.getElementById("labelC");
var labelD = document.getElementById("labelD");
//select each answer to set value of choices 
var choiceA = document.querySelector("#ans1");
var choiceB = document.querySelector("#ans2");
var choiceC = document.querySelector("#ans3");
var choiceD = document.querySelector("#ans4");
//display result of answer choice 
var result = document.querySelector(".result");

//sent question index to 0 so it can be incremented later
var currentQuestionIndex = 0;

//user choice is set to nothing for now to be changed later
var userChoice = "";
//correct answer is set to nothing for now to change at every question 
var correctAnswer ="";
//starting score is 0
var score = 0;
//counting down seconds starting from 76, because 75 will show 
var secondsLeft = 76;

//function beings when "Start Quiz" button is clicked
function startButton() {
    var mainscreenEl = document.querySelector(".main-screen");
    //when start button is clicked, hide main screen
    mainscreenEl.setAttribute("style", "display: none;");
    //the radio buttons form is hidden at first, and this function removes the "hide" class
    
    qandaform.removeAttribute("class");
     
}

//function to begin the countdown from 76 seconds 
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = `Time Remaining: ${secondsLeft} seconds`; 
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

//function to set up questions
function initializeQuestion() {
    //the new variable set here grabs the index of the questions list 
    var thisQuestion = questionList[currentQuestionIndex];
    //in index.html, the question title will be displayed in the questionList id div element
    questionListPara.innerHTML = thisQuestion.title;
   
    //labels now displayed with a text (answer choices)
    labelA.textContent = thisQuestion.choices.a;
    labelB.textContent = thisQuestion.choices.b;
    labelC.textContent = thisQuestion.choices.c;
    labelD.textContent = thisQuestion.choices.d;

    //sets the correct answer to each question's "correct" object value
    correctAnswer =  thisQuestion.correct;
    result.textContent = ("")
    // clears previous radio button choice for next question
    var choiceEl = document.getElementsByName("choice")
    for (var i = 0; i <choiceEl.length; i++)
    choiceEl[i].checked = false;
        
};

//user choice is set to button events and will call the validate function
function setChoice(event) {
    var button = event.target;
    userChoice = button.dataset.answer;
    validate ();
};

//validate's user's choice 
function validate (){
    
    if (userChoice === correctAnswer) {
        
        //if user's choice is equal to the correct answer of this question, the score will increase by 1 point. 
        score+=1;
        scoreEl.innerHTML ="Score: " + score;
        result.textContent = "You're correct!"
    }
        
    else {
        //if user's choice is not equal to the correct answer of this question, the score will not change, instead the seconds will decrease by 5
        scoreEl.innerHTML ="Score: " + score;
        secondsLeft-=5;
        result.textContent = "Sorry, not that one!"
        
    }
    setTimeout(function(){
    //this ensures the function will go through the index of the question list in increments

    currentQuestionIndex++;
    if (currentQuestionIndex < questionList.length){
        initializeQuestion();
    //once the last question is done, the game will end 
    }else {
        //end game
    }
},
    3000);
         };
        

//this button is linked to the "Start Quiz" button and will call functions below 
startBtn.addEventListener("click", function (event) {
        startButton();
        setTime();
        initializeQuestion()

});

//adds event listener to each choice at a click and in each instance, will call the setChoice function 
choiceA.addEventListener("click", setChoice);
choiceB.addEventListener("click", setChoice);
choiceC.addEventListener("click", setChoice);
choiceD.addEventListener("click", setChoice);



