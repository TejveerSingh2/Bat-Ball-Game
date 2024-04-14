
let scoreStr=(localStorage.getItem('Score'));
let score;
resetScore(scoreStr);
function resetScore(scoreStr){
  score=scoreStr ? JSON.parse(scoreStr) : {
    win:0,
    loose:0,
    tie:0,
};

  score.displayScore=function(){
    return `Score:\n Won: ${score.win} Tie: ${score.tie} Lost: ${score.loose}`;
  };
  printAns();
}

function computerChoiceGenerator() {
  let random = Math.random() * 3;
  if (random <= 1) return "bat";
  else if (random <= 2) return "ball";
  else return "stump";
}
function generateAns(userChoice, computerChoice) {
  if (userChoice === "bat") {
    if (computerChoice === "bat") {
      score.tie++;
      return `It's a tie &#128517`;
    }
    else if (computerChoice === "ball") {
      score.win++;
      return `you won &#128512`;
    }
    else if (computerChoice === "stump") {
      score.loose++;
      return "computer won 😔";
    }
  } else if (userChoice === "ball") {
    if (computerChoice === "bat") {
      score.loose++;
      return "computer won 😔";
    }
    else if (computerChoice === "ball") {
      score.tie++;
      return `it's a tie &#128517`;
    }
    else if (computerChoice === "stump") {
      score.win++;
      return `you won &#128512`;
    }
  }
  if (userChoice === "stump") {
    if (computerChoice === "bat"){
      score.win++;
      return "you won &#128512";
    } 
    else if (computerChoice === "ball") {
      score.loose++;
      return `computer won 😔`;
    }
    else if (computerChoice === "stump") {
      score.tie++;
      return `it's a tie &#128517`;
    }
  }
}
function printAns(userChoice, computerChoice, res) {
  localStorage.setItem("Score",JSON.stringify(score));
  document.querySelector('#userMove').innerHTML=userChoice?`You have choosen: ${userChoice}`:"";
  document.querySelector('#computerMove').innerHTML=computerChoice?`Computer have choosen: ${computerChoice}`:"";
  document.querySelector('#result').innerHTML=res||"";
  document.querySelector("#score").innerHTML=score.displayScore();
  // alert(
  //   `user choose: ${userChoice}\ncomputer choice: ${computerChoice}\nres: ${res} 
  //   ${score.displayScore()}`
  // );
}