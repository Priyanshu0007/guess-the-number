'use strict';
var guess;
var score=20;
var highScore=0;
var number=randomNumber();
document.querySelectorAll(".btn")[1].addEventListener("click", game);
document.querySelectorAll(".btn")[0].addEventListener("click", function(){
  number=randomNumber();
  score=20;
  game();
});
function game(){
  guess=document.querySelector(".guess").value;
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").innerHTML="?";
  if (score==0) {
    document.querySelector(".message").innerHTML="You lost the game";
    scoring(0);
    document.body.style.backgroundColor = "red";
  }
  else if (guess<number) {
    document.querySelector(".message").innerHTML="too low...📉";
    score--;
    scoring(score);
  }
  else if (guess>number) {
    document.querySelector(".message").innerHTML="too high...📈";
    score--;
    scoring(score);
  }
  else if (guess==number) {
    document.querySelector(".message").innerHTML="Right Answer";
    document.body.style.backgroundColor = "green";
    highScoring(score);
    document.querySelector(".number").innerHTML=number;
  }
  else{}
}
function highScoring(num){
  highScore=num;
  document.querySelector(".highscore").innerHTML=num;
}
function scoring(num){
  score=num;
  document.querySelector(".score").innerHTML=num;
}
function randomNumber(){
  let c=Math.floor(Math.random()*20)+1;
  return c;
}
