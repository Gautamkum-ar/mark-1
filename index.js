var readlineSync = require("readline-sync");

let score = 0;

var questionAnswer = [
  {
    question: "What is my home city name?",
    answer: "Ghazipur",
  },
  {
    question: "which city I had completed my schooling?",
    answer: "Varanasi",
  },
  {
    question: "How older gautam become 2022?",
    answer: "21",
  },
  {
    question: "Do Gautam have any Girlfriend?",
    answer: "no",
  },
  {
    question: "which city i'm currently studying?",
    answer: "Bhopal",
  },
];

function welcomeMasssage() {
  var yourName = readlineSync.question("What is your name? ");

  console.log("Welcome " + yourName + "  do you know  Gautam?");
  console.log("---------------------");
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right keep it up!!");
    score = score + 2;
  } else {
    console.log("You are wrong!");
  }

  console.log("Your current score: ", score);
  console.log("-------------");
}

function playGame() {
  for (var i = 0; i < questionAnswer.length; i++) {
    var currentQuestion = questionAnswer[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function displayScores() {
  console.log("Your score is : ", score);
}

welcomeMasssage();
playGame();
displayScores();
