// Array of Michael Jordan's Trivia Question, we will pull from and create a function with.
var quizQuestions = [  

    { 
        questions:      "Jordan grew up in North Carolina, but where was he born?",
        choices:        ["Los Angeles", "New York City", "Hamburg", "Miami"],
        correctAnswer:  "New York City"
    },
    {
        questions:      "What is Jordan's middle name?",
        choices:        ["Jeffrey","Raymone","Michael","He doesn't have a middle name"],
        correctAnswer:   "Jeffrey"
        

    },
    {
        questions:      "Jordan was marked out as a future NBA star during a stellar college career. Where he did attend college?",
        choices:        ["North Carolina", "Duke", "Kentucky", "Kansas"],
        correctAnswer:  "North Carolina"
        
    },
    {
        questions:      "How many points did Jordan average per game?",
        choices:        ["27.1", "30.1", "33.1", "36.1"],
        correctAnswer:  "30.1"
    },

    {
        questions:      "How many Olympic Gold Medals did Jordan win in his career",
        choices:        ["0", "1", "2", "3"],
        correctAnswer:  "2"
    },
    {
    
        questions:      "Jordan is one of the greatest athletes of all time. What is Jordan's estimated net worth",
        choices:        ["$900m", "$1.3bn", "$1.7bn", "2.1bn"],
        correctAnswer:  "2.1bn"

    }

    
];

//List of values
var counter = 8;                
// keeping track of the amount of question 
var currentQuestion = 0;       
 // currentQuestion will start at the index of 0. 
var score = 0;                 
 // score will be tracked at 0
var lost = 0;        
// amount of questions answered incorrectly           
var timer;                      




//Creating a timer for user to choose an answer to each question
function countDown() {
    counter--;
    $("#time").html("Timer: " + counter);

    if (counter === 0) {
        timeReset();
        
        


    }
}

//Creating a function that prevents timer to keep going down
function timeReset() {
    clearInterval(timer);
    lost++;
    nextQuestion();
}





// Event listeners 
$("#start").click(function() {
    $("#start").remove();
    $("#start").html(counter);
    loadQuestion();

});;




//Display the questions, choices and creating a function to pick the current question and load

function loadQuestion() {
    counter = 8;
    timer = setInterval(countDown, 1000);
    // the variable time will be assigned a setInterval(countdown, 1000)

    const question = quizQuestions[currentQuestion].questions;
    // const question will be assigned the variable array we have made our questions with and have the current index of 0 and display the questions.
    const choices =  quizQuestions[currentQuestion].choices;
        // const question will be assigned the variable array we have made our questions with and have the current index of 0 and display the choices.

    $("#time").html("Time Remaining: " + counter);
   // created a class from the html h2 id="time" and added the counter 
    //Displaying the question and function that has the choices
    $("#game").html(`
        
        <h4>${question}</h4> 
        ${loadChoices(choices)}
        ${loadRemainingQuestion()}
        
    
    `);
    
}    



function loadChoices(choices) {
    var result = " ";

    // created a loop that will go over the choices till theres no more
    for (var i = 0; i < choices.length; i++) {
    //setting a data answer with every value of choices and also displaying them 
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;

}

// this was added after all the questions and choices were able to seen
$(document).on("click", ".choice",function() {
    clearInterval(timer);
    var selectedAnswer = $(this).attr("data-answer");
    var correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    if (correctAnswer===selectedAnswer){
        score++;
        nextQuestion();
        console.log("wins");
    }
    else{
        lost++;
        counter--;
        nextQuestion();
        console.log("loss");
    }
    
});;



function loadRemainingQuestion() {
    var remainingQuestion = quizQuestions.length - ( currentQuestion + 1);
    var totalQuestion = quizQuestions.length;

    return `Remaining Question: ${remainingQuestion}/${totalQuestion}`;
}

//creating a function that goes to the next question
function nextQuestion(){
    var isQuestionOver= (quizQuestions.length - 1) === currentQuestion;
    if (isQuestionOver){
        console.log("game is over");
        displayResult();
    }   
    
    else{
        currentQuestion++;
        loadQuestion();
    }
    
}

function displayResult() {
    var result = `
    <p>You get ${score} questions(s) right </p.>
    <p>You missed ${lost} questions(s) right </p.>
    <p>Total questions ${quizQuestions.length} questions(s) right </p.>
    <button class="btn btn-primary" id="reset">Reset Game </button>
    `;
    $("#game").html(result);

};


//reset button after they complete the game
$(document).on("click","#reset", function(){
    counter = 5;
    currentQuestion = 0;
    score = 0;
    lost = 0;
    timer = null;
    loadQuestion();
});