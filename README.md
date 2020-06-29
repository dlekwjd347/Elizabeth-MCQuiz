# Elizabeth-MCQuiz

This timed code quiz with multiple-choice questions features a responsive layout, dynamic HTML and CSS powered by my Javascript code all on a clean and polished user interface. 


At the start of the quiz which is enabled by the Start Quiz button, you are presented with a question, and a timer set at 75 seconds starts counting down.

    --the timer function is done with the setInterval which starts the countdown

When the current question is answered, the next question will appear in its place. 

    --this is done by looping the questions and simple css to hide the previous question

When questions are answered incorrectly, the timer will decrement by 5 seconds and no score will be noted.

    --this action is completed with an if/else flow statement to recognize different situations in the game and account for the related action

When questions are answered correctly, the score will increase by 1 point.

    --this action is completed with radio buttons that have corresponding onclick event listeners and variables that recognize which is the right answer for all answer choices

When the timer reaches 0, the quiz is over. 

    --this action is completed by the clearInterval function that calls the same variable that is assigned to the setInterval function

When all questions are answered, or when the timer reaches 0, the player's initials and scores can be saved to local storage and can be accessed on the View Highscores page. 

    --by saving the scores and initials to local storage by setItem, the objects and their values are called by getItem and displayed in numerical order. 


Deployed URLs:

https://dlekwjd347.github.io/Elizabeth-MCQuiz/index.html

https://github.com/dlekwjd347/Elizabeth-MCQuiz


