var clearScores = document.getElementById("clear");

document.addEventListener("DOMContentLoaded", function () {
    var highScores = JSON.parse(localStorage.getItem("scores")) || [];

    highScores.sort (function (a, b) {
        return b.score - a.score;
    });

    var highScoresList = document.getElementById("highscores");

    highScores.forEach(function (score) {
        var li = document.createElement("li");
        li.textContent = score.initials + " : " + score.score;
        highScoresList.appendChild(li);
    });

    clearScores.addEventListener("click", function () {
        clearHighScores();
        highScoresList.innerHTML = "<p>High score cleared!</p>";
    });

    function clearHighScores() {
        localStorage.removeItem("scores");
    }
});