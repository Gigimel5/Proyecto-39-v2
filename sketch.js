var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update();
    // Llama al método update que está dentro de la clase quiz
  }
  if(gameState === 1){
    clear();
    play.update();
    quiz.play();
  }
}
