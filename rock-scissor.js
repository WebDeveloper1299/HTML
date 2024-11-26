const score = {
  win: 0,
  loses: 0,
  tie: 0
};

console.log(window.innerHeight);
console.log(window.innerWidth);

function ResetScore() {
  score.win = 0;
  score.loses = 0;
  score.tie = 0;
  localStorage.removeItem('score');
  localStorage.setItem('score', JSON.stringify(score))
  let { win, loses, tie } = JSON.parse(localStorage.getItem('score'));
document.querySelector(".computer-move").innerHTML=""
document.querySelector(".user-move").innerHTML=""

 document.querySelector('.win').innerHTML=win
document.querySelector('.loss').innerHTML=loses
document.querySelector('.tie').innerHTML=tie
}



function ComputerMove() {
  let resuls = "";
  let computerMove = Math.random();
  if (computerMove >= 0 && computerMove <= 1 / 3) {
    resuls = "scissor";
  } else if (computerMove > 1 / 3 && computerMove <= 2 / 3) {
    resuls = "rock";
  } else if (computerMove > 2 / 3) {
    resuls = "paper";
  }
  return resuls;
}
let isrunning=false
function autoplay() {
  if (!isrunning) {
    isrunning = true;
    timerid = setInterval(function () {
      let computervalue = ComputerMove();
      let array = ["rock", "paper", "scissor"];

let randomIndex = Math.floor(Math.random() * array.length);

let randomElement = array[randomIndex];
      document.querySelector('.computer-move').innerHTML = computervalue;
      document.querySelector('.user-move').innerHTML = randomElement;

      if (
        (computervalue === "scissor" && randomElement === "scissor") ||
        (computervalue === "paper" && randomElement === "paper") ||
        (computervalue === "rock" && randomElement === "rock")
      ) {
        score.tie += 1;
      } else {
        if (
          (computervalue === "scissor" && randomElement === "paper") ||
          (computervalue === "paper" && randomElement === "scissor") ||
          (computervalue === "rock" && randomElement === "scissor") ||
          (computervalue === "scissor" && randomElement === "rock")
        ) {
          score.win += 1;
        } else {
          score.loses += 1;
        }
      }

      localStorage.setItem("score", JSON.stringify(score));

      let { win, loses, tie } = JSON.parse(localStorage.getItem('score'));

      const winElement = document.querySelector('.win');
      const lossElement = document.querySelector('.loss');
      const tieElement = document.querySelector('.tie');

      if (winElement) winElement.innerHTML = win;
      if (lossElement) lossElement.innerHTML = loses;
      if (tieElement) tieElement.innerHTML = tie;
    }, 1000);
  } else {
    isrunning = false;
    clearInterval(timerid);
  }
}

function gamestart(value) {
  let computervalue = ComputerMove();
  document.querySelector('.computer-move').innerHTML=computervalue
  document.querySelector('.user-move').innerHTML=value
  if (
    (computervalue === "scissor" && value === "scissor") ||
    (computervalue === "paper" && value === "paper") ||
    (computervalue === "rock" && value === "rock")
  ) {
    score.tie += 1;
  } else {
    if (
      (computervalue === "scissor" && value === "paper") ||
      (computervalue === "paper" && value === "scissor") ||
      (computervalue === "rock" && value === "scissor") ||
      (computervalue === "scissor" && value === "rock")
    ) {
      score.win += 1;
    } else {
      score.loses += 1;
    }
  }

  localStorage.setItem("score", JSON.stringify(score));

  let { win, loses, tie } = JSON.parse(localStorage.getItem('score'));

  const winElement = document.querySelector('.win');
  const lossElement = document.querySelector('.loss');
  const tieElement = document.querySelector('.tie');

  if (winElement) {
    winElement.innerHTML = win;
  }
  if (lossElement) {
    lossElement.innerHTML = loses;
  }
  if (tieElement) {
    tieElement.innerHTML = tie;
  }
}
