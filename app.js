let Player = prompt("your name?");
const quizData = [
  {
    question: "Which one is correct?",
    a: "Javascript is fun",
    b: "Javascript is gun",
    c: "Javascript is nun",
    d: "Javascript is lol",
    correct: "a",
  },

  {
    question: "Which mobile is good?",
    a: "Samsung",
    b: "IPhone",
    c: "Nokia",
    d: "Walton",
    correct: "d",
  },

  {
    question: "Is Joydip is good boy?",
    a: "Yes",
    b: "No",
    c: "Don't know",
    d: "Maybe",
    correct: "a",
  },
];
console.log(quizData);

const quiz = document.getElementById("container");
const answerField = document.querySelectorAll(".answer");
const mainQuestion = document.getElementById("question");
const optionA = document.getElementById("a_text");
const optionB = document.getElementById("b_text");
const optionC = document.getElementById("c_text");
const optionD = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let initialQuiz = 0;
let score = 0;

//Load Data from object
loadQuiz();
function loadQuiz() {
    deSelectAnswer();
    const initialQuizData = quizData[initialQuiz];
    mainQuestion.innerText = initialQuizData.question;
    optionA.innerText = initialQuizData.a;
    optionB.innerText = initialQuizData.b;
    optionC.innerText = initialQuizData.c;
    optionD.innerText = initialQuizData.d;
}


//deSelect Option
function deSelectAnswer() {
    answerField.forEach(answerData => answerData.checked = false);
}

//list select from option
function optionSelect() {
    let selectAnswer;

    answerField.forEach(answerData => {
        if (answerData.checked) {
          selectAnswer = answerData.id;
        }
    })
   return selectAnswer;
}

// submit button work by click
submitButton.addEventListener("click", () => {
    let selectAnswer = optionSelect();
    if (selectAnswer) {
        if (selectAnswer === quizData[initialQuiz].correct) {
            score++;
        }
        initialQuiz++;
        if (initialQuiz < quizData.length) {
            loadQuiz()
        }
        else {
          quiz.innerHTML = `
                <h2 class = "result">You answered ${score}/${quizData.length} questions correctly</h2>
                <p>Thank you for playing ${Player}</p>
                <button onclick="location.reload()" class="reload">Play again</button>
            `;
        }
    }
})