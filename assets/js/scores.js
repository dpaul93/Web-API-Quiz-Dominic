var clearScores = document.getElementById("clear");

document.addEventListener("DOMContentLoaded", function () {

    var highScores = JSON.parse(localStorage.getItem("scores")) || [];

    highScores.sort (function (a, b) {
        return b.score - a.score;
    });

    
})