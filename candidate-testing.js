
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers = [];
let candidateAnswers = [];
const input = require('readline-sync');
let numberCorrect;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name: ");
console.log("Hello "  + candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

 questions = ['Who was the first American woman in space?', 'True or false: 5 kilometer == 5000 meters?', '(5 + 3)/2 * 10 = ?',"Given the array [8, 'orbit', 'trajectory' 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];
   
 correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];



  for (let i = 0; i < questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i]);
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
//console.log("Correct");
numberCorrect = numberCorrect + 1;
  }
  else {
    //console.log("Incorrect!");
  }
  }

//

}


function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

 for (let i = 0; i < candidateAnswers.length; i++){
console.log(`You answered ${candidateAnswers[i]}`);
console.log(`The correct answer is ${correctAnswers[i]}`);
 }


  let grade = numberCorrect / 4;
  if (grade >= .8){
    console.log('You have passed!');
  } else {
    console.log('You have failed!');
  }

console.log(grade);
  return grade;

}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};