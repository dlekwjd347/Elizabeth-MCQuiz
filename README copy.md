# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button 
    //start button function 
    //inside this function will start the timer (setInterval)
    //does clearInterval go in here?

THEN a timer starts and I am presented with a question
    //function for the first question will start when the timer starts above 
    //when the timer starts, the first question will also pop up 

WHEN I answer a question
    //on click event to move on to the next question, but need an if === answer statement 

THEN I am presented with another question
WHEN I answer a question incorrectly
    //need an if else statement for each question where else makes the action of decrementing time at an error

THEN time is subtracted from the clock
    //time - 1 min 

WHEN all questions are answered or the timer reaches 0
    //function?

THEN the game is over
WHEN the game is over

THEN I can save my initials and score
    //save to local storage (activity 20)
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
