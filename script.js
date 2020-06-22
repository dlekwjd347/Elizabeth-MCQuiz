var score = 0;
var questionsEl = document.querySelector("questions");
var startBtn = document.getElementById("start");

function startButton() {
    var startscreenEl = document.querySelector(".start-screen");
    //when start button is clicked, hide start screen
    startscreenEl.setAttribute("style", "display: none;");

    //un-hide questions
    // questionsEl.removeAttribute("class");

}

document.addEventListener("click", function (event) {
    if (event.target.matches("#start")) {
        startButton()

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
