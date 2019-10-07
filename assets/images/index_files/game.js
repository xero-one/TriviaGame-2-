// Values
var counter = 30;
var displayedQuestion = 0;
var score = 0;
var lost = 0;
var timer;

//Start button to initialize the game
$("#start").click(function() {
    $("#start").remove();
    $("#clock").html(counter);
    readyQuestion();
});

//The count-down function
function countDown() {
    counter--;
    $("#clock").html("Clock: " + counter);
    if (counter === 0) {
        timeOver();
    }
}

//Call for when timer is over
function timeOver() {
    clearInterval(timer);
    lost++;
    readyImage("lost");
    setTimeout(nextQuestion, 3500);
}

//Function to load/prep the questions
function readyQuestion() {
    counter = 30;
    timer = setInterval(countDown, 1000);

    const question = triviaQuestions[displayedQuestion].question; // 
    const choices = triviaQuestions[displayedQuestion].choices; // 

    $("#clock").html("Clock: " + counter);
    $("#game-js-content-section").html(`
        <br>
        <h4>${question}</h4>
        ${readyChoices(choices)}
        <br>
        ${questionCountDisplay()}
    `);
}

//Function to check the choice input against the array
function readyChoices(choices) {
    var result = "";

    for (var i = 0; i < choices.length; i++) {
        result += `<button class="choice btn btn-danger btn-block" data-answer="${choices[i]}">${choices[i]}</button>`;
    }
    return result;
}

//Marker for the count of remaining questions
function questionCountDisplay() {
    /*Default "remainingQuestion" variabe 
    const remainingQuestion = triviaQuestions.length - (displayedQuestion + 1);*/
    const remainingQuestion = triviaQuestions.length - (displayedQuestion + 1);
    const totalQuestion = triviaQuestions.length;

    return `Remaining Question(s): ${remainingQuestion}/${totalQuestion}`;
}

//Random generator function for randomized images
function randomImage(images) {
    const random = Math.floor(Math.random() * images.length);
    const randomImage = images[random];
    return randomImage;
}

//Argument to define and call results and win/lose image
function readyImage(status) {
    const rightAnswer = triviaQuestions[displayedQuestion].rightAnswer;

    if (status === "win") {
        $("#game-js-content-section").html(`
            <p class="preload-image">Bloody flawless, you picked the right answer!</p>
            <p class="preload-image">The right answer is <b>${rightAnswer}</b></p>
            <img src="${randomImage(celebrationImages)}" />
        `);
    } else {
        $("#game-js-content-section").html(`
            <p class="preload-image">The right answer is <b>${rightAnswer}</b></p>
            <p class="preload-image">hahahahahaha...try again!</p>
            <img src="${randomImage(wrongImages)}" />
        `);
    }
}

function nextQuestion() {
    const isQuestionOver = (triviaQuestions.length - 1) === displayedQuestion;
    if (isQuestionOver) {
        printResult();
    } else {
        displayedQuestion++;
        readyQuestion();
    }
    
}

//Function to display results
function printResult() {
    const result = `
        <p><b>You got ${score} question(s) right</b></p>
        <p><b>You missed ${lost} question(s)</b></p>
        <p><b>All out of a total of ${triviaQuestions.length} questions(s)</b></p>
        <button class="btn btn-primary" id="reset">Reset Game</button>
    `;

    $("#game-js-content-section").html(result);
}

//"On-click" event listener for choice check conditionals and calls
$(document).on("click", ".choice", function() {
    clearInterval(timer);
    const chosenAnswer = $(this).attr("data-answer");
    const rightAnswer = triviaQuestions[displayedQuestion].rightAnswer;

    if (rightAnswer === chosenAnswer) {
        score++;
        readyImage("win");
        setTimeout(nextQuestion, 3500);
    } else {
        lost++;
        readyImage("lost");
        setTimeout(nextQuestion, 3500);
    }
});

//Event listener and call to reset variables
$(document).on("click", "#reset", function() {
    counter = 30;
    displayedQuestion = 0;
    score = 0;
    lost = 0;
    timer = null;

    readyQuestion();
});




