var startQuiz = document.querySelector('#start-quiz');
var startBtn = document.querySelector('#start-btn');
var quiz = document.querySelector('#quiz');
var questionElement = document.getElementById('question');
var answerElement = document.querySelector('#answer');
var timeElement = document.querySelector("#time");
var countdown;
var count = 70;

var qIndex = 0;

var questions =[
    {
        
        question:'What is 2 + 2',
        answers: [
            { text:'4', correct: true },
            { text:'3', correct: false },
            { text:'2', correct: false },
            { text:'1', correct: false },

        ],
        correct: '4'
    },
    {
        question:'What is 3 + 3',
        answers: [
            { text:'6', correct: true },
            { text:'3', correct: false },
            { text:'2', correct: false },
            { text:'1', correct: false },

        ],
        correct: '6'
    },
    {
        question:'What is 4 + 4',
        answers: [
            { text:'8', correct: true },
            { text:'3', correct: false },
            { text:'2', correct: false },
            { text:'1', correct: false },

        ],
        correct: '8'
    }

]

function startTheQuiz() {
    // Hide the start section
    startQuiz.style.display = "none";
    // To Do: Sho the question section
    quiz.style.display = "flex";

    // Start our timer
    countdown = setInterval(() => {
    count--;
    time.innerHTML = `${count}s`;
    if (count == 0) {
        endTheQuiz();
      }
    }, 1000);

    // call function to show a question
    populateQuestion();
}

function populateQuestion(){
  questionElement.innerHTML = questions[qIndex].question;

  answerElement.innerHTML = "";

  questions[qIndex].answers.forEach(function(answer) {
    // create the element
    var btnElement = document.createElement("button");
    // give it text content
    btnElement.textContent = answer.text;
    // add true/false value
    // btnElement.value = answer.correct;
    // add a class for styling purposes
    btnElement.classList.add('answer-btn');
    //add click listener
    btnElement.addEventListener('click', checkAnswer)
    // append to page
    answerElement.append(btnElement);

    
  })

}

function checkAnswer() {
    console.log('This: ', this.innerText);
    console.log('Use qIndex', questions[qIndex].correct);

    if (questions[qIndex].correct === this.innerText) {
        console.log('correct')
    } else {
        console.log('wrong')
        count-=5;
        time.innerHTML = `${count}s`;
        if (count <= 0) {
            endTheQuiz();
        }
    }

    qIndex ++;

    // Make sure there are questions left

    // If yes, move on to next question by calling populate question

    // If no, call end Quiz
}

function endTheQuiz() {
    clearInterval(countdown);
}

function saveScore() {}




startBtn.addEventListener('click', startTheQuiz);