var startButton = document.getElementById("start");
var choicesCont = document.getElementById("choices");
var questionTitle = document.getElementById("questions-title");
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

