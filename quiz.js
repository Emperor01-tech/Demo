const quizQuestions = [
    {
        question: "What is the capital of Nigeria?",
        options: ["Lagos", "Abuja", "Port Harcourt", "Ibadan"],
        correctAnswer: 1
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let userScore = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});

function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    
    const answerList = document.getElementById('answers');
    answerList.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = option;
        listItem.onclick = () => selectAnswer(index);
        answerList.appendChild(listItem);
    });
}

let selectedAnswer = null;
function selectAnswer(index) {
    selectedAnswer = index;
    console.log(`Selected Answer: ${index}`);
}

function submitAnswer() {
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
        alert('Correct!');
        userScore += 10;
    } else {
        alert('Wrong!');
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        alert(`Quiz completed! Your score is: ${userScore}`);
        // Save user score (could be in localStorage or sent to the server)
    }
      }
  
