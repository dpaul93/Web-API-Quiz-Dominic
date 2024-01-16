document.addEventListener("DOMContentLoaded", function () {

var startButton = document.getElementById("start");
var choicesCont = document.getElementById("choices");
var questionTitle = document.getElementById("question-title");
var timeElement = document.getElementById("time");
var nameInitials = document.getElementById("initials");
var finalScore = document.getElementById("final-score");
var submitButton = document.getElementById("submit");
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen");
var questions = document.getElementById("questions");
var feedback = document.getElementById("feedback");

var currentQuestionIndex = 0;
var timeleft = 60;
var timer;

// Button event listener
startButton.addEventListener("click", startQuiz);

choicesCont.addEventListener("click", function (event) {
if (event.target.matches("button")) {
    checkAnswer(event.target.textContent);
}
});

submitButton.addEventListener("click", function () {
    saveScore();
});

var quizQuestions = getQuizQuestions();

function startQuiz () {
    startScreen.classList.add("hide");
    questions.classList.remove("hide");

    startTimer();

    displayQuestion();
}

function displayQuestion () {
    var currentQuestion = quizQuestions[currentQuestionIndex];

    questionTitle.textContent =currentQuestion.question;

    choicesCont.innerHTML = "";

    currentQuestion.choices.forEach(function (choice) {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choicesCont.appendChild(choiceButton);
    });
}


function checkAnswer(selectedChoice) {
    var currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedChoice === currentQuestion.correctAnswer) {
        showFeedback("correct!", "green");
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            setTimeout(displayQuestion, 1000);
        } else {
            endQuiz();
        }
    } 
    else {
        showFeedback("Wrong!", "red");
        timeleft -= 10;
        if(timeleft <= 0) {
            endQuiz();
        }
    }
        }


        function startTimer() {
            timer = setInterval(function () {
                timeleft--;
                timeElement.textContent = timeleft;

                if (timeleft <= 0) {
                    endQuiz();
                }
            }, 1000)
            }
        
            function endQuiz(){
                clearInterval(timer);

                questions.classList.add("hide");
                endScreen.classList.remove("hide");

                finalScore.textContent = timeleft;
            }       

            function showFeedback(message, color) {
                feedback.textContent = message;
                feedback.style.color = color;
                feedback.classList.remove("hide");

                setTimeout(function (){
                    feedback.classList.add("hide");
                }, 1000);
            }

            function saveScore() {
                var initials = nameInitials.value.trim();

                if (initials === "") {
                    alert("Please fill in your initials.");
                    return;
                }

                var scores = JSON.parse(localStorage.getItem("scores")) || [];

                scores.push({ initials: initials, score: timeleft });

                localStorage.setItem("scores", JSON.stringify(scores));

                alert("Score saved! Initials: " + initials + " Score: " + timeleft);
                window.location.href='highscores.html';
            }
});