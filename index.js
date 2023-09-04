const question = [
  {
      Question: 'What is the capital of France?',
      answers: [
          {text : "Paris", correct: true},
          {text : "Berlin", correct: false},
          {text : "Madrid", correct: false},
          {text : "Rome", correct: false},
      ]
  },
  {
      Question: 'What does HTML stand for?',
      answers: [
          {text : "Hyper Text Markup Language", correct: true},
          {text : "High Technology Markup Language", correct: false},
          {text : "Hyperlink and Text Markup Language", correct: false},
          {text : "Home Tool Markup Language", correct: false},
      ]
  },
  {
      Question: 'Which of the following is not a programming language?',
      answers: [
          {text : "Python", correct: false},
          {text : "HTML", correct: false},
          {text : "Java", correct: false},
          {text : "Binary", correct: true},
      ]
  },
  {
      Question: 'Which programming language is known for its simplicity and readability?',
      answers: [
          {text : "C++", correct: false},
          {text : "JavaScript", correct: false},
          {text : "Python", correct: true},
          {text : "Ruby", correct: false},
      ]
  },
  {
      Question: 'What does CSS stand for?',
      answers: [
          {text : "Computer Style Sheets", correct: false},
          {text : "Creative Styling System", correct: false},
          {text : "Cascading Style Sheets", correct: true},
          {text : "Colorful Style Sheets", correct: false},
      ]
  },
  {
      Question: 'In JavaScript, which keyword is used to declare a variable?',
      answers: [
          {text : "new", correct: false},
          {text : "var", correct: true},
          {text : "let", correct: false},
          {text : "variable", correct: false},
      ]
  },
  {
      Question: 'Which data structure follows the Last-In-First-Out (LIFO) principle?',
      answers: [
          {text : "Queue", correct: false},
          {text : "List", correct: false},
          {text : "Stack", correct: true},
          {text : "Array", correct: false},
      ]
  },
  {
      Question: 'What is the purpose of a constructor in object-oriented programming?',
      answers: [
          {text : "To create loops", correct: false},
          {text : "To initialize an object", correct: true},
          {text : "To perform sorting", correct: false},
          {text : "To define global variables", correct: false},
      ]
  },
  {
      Question: 'Which operator is used for concatenating strings in most programming languages?',
      answers: [
      {text : "+", correct: false},
      {text : "&", correct: false},
      {text : "|", correct: false},
      {text : "++", correct: true},
      ]
  }
];

const questionElement = document.getElementById("question");
const ansbtn = document.getElementById("ans-btn");
const nxtbtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz() {
  currentQuestionIndex = 0;
  score = 0;
  nxtbtn.innerHTML = "Next";
  showquestion();
}

function showquestion() {
  //resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + " . " + currentQuestion.Question;

  ansbtn.innerHTML = ""; // Corrected variable name

  currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      button.addEventListener("click", () => checkAnswer(answer.correct));
      ansbtn.appendChild(button);

      if(answer.correct){
          button.dataset.correct = answer.correct;

      }
      button.addEventListener("click",selectAnswer);

  });
}


function selectAnswer(e) {
  const selectbtn = e.target;
  const iscorrect = selectbtn.dataset.correct === "true";

  if (iscorrect) {
      selectbtn.classList.add("correct");
      score++;
  } else {
      selectbtn.classList.add("incorrect");
  }

  Array.from(ansbtn.children).forEach(button => {
      if (button.dataset.correct === "true") {
          button.classList.add("correct");
      }
      button.disabled = true;
  });

  nxtbtn.style.display = "block";
}

function showscore(){
  resetState();
  questionElement.innerHTML = `Your Score: ${score} out of ${question.length}!`;
  nxtbtn.innerHTML = "Play Again";
  nxtbtn.style.display = "block";
}

function handlenextbutton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < question.length){
      showquestion();
  }else{
      showscore();
  }
}

nxtbtn.addEventListener("click",()=>{

  if(currentQuestionIndex < question.length){
      handlenextbutton();
  }else{
      startquiz();
  }
})

function resetState(){

  nxtbtn.style.display = "none";
  while(ansbtn.firstChild){
      ansbtn.removeChild(ansbtn.firstChild);
  }

}
startquiz();