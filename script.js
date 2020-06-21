p.setAttribute("class", "animate__animated animate__zoomInDown animate__infinite");

var questions = [
    {
        prompt: "Knowing correct grammar will help you write ________.\n(a) good\n(b) well\n (c) goodly\n(d)clear",
        answer: "b"
    }








]

var score = 0;

for (var i = 0; i < questions.length; i++) {
    var response = window.prompt()

    if (response === questions[i].answer) {
        score++;
    }

    else {
        timer--;

    }
}