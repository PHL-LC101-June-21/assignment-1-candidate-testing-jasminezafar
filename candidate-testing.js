
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions = ['1) Who was the first American woman in space? ', '2) True or false: 5000 kilometer == 5 kilometers? ', '3) (5 + 3)/2 * 10 = ?',"4) Given the array [8, 'orbit', 'trajectory' 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
const input = require('readline-sync');
let numberCorrect = 0;
let overallGrade;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name: ");
console.log("Candidate Name: "  + candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++){
  candidateAnswers[i] = input.question(questions[i]);
   if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
//console.log("Correct");
numberCorrect = numberCorrect + 1;
  }
 //console.log("Incorrect!");  
  } 
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

 for (let i = 0; i < candidateAnswers.length; i++){
console.log(`${questions[i]}\n`);   
console.log(`Your answer: ${candidateAnswers[i]}\n`);
console.log(`Correct Answer: ${correctAnswers[i]}\n`);
 }

overallGrade = numberCorrect / 5*100 + '%';
console.log('>>> ' + `Overall Grade: ${overallGrade}` + ' <<<');

  let grade = numberCorrect / 5;
  if (grade >= .8){
    console.log('>>> ' + 'Status: PASSED' + ' <<<');
  } else {
    console.log('>>> ' + 'Status: FAILED' + ' <<<');
  }
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