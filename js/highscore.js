var scores = [];
var previousScores = localStorage.getItem("highScores");
var score = 0;
var scoreMultiplier = 1;
if (previousScores) {
  scores = JSON.parse(previousScores);
}

function add(score) {
  scores.push(score);
  scores.sort(function (a, b) {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    }
    return 0;
  });

  if (scores.length > 5) {
    scores = scores.slice(0, "highScores");
  }
  localStorage.highScores = JSON.stringify(scores);
}
