var startQuiz = document.querySelector('#start-quiz');
var startBtn = document.querySelector('#start-btn');
var quiz = document.querySelector('#quiz');
var questionElement = document.getElementById('question');
var answerElement = document.querySelector('#answer');
var endQuiz = document.getElementById('end-quiz')
var timeElement = document.querySelector("#time");
var countdown;
var count = 70;

var qIndex = 0;

var questions =[
    {
        
        question:'There are how many coding language?',
        answers: [
            { text:'1', correct: false },
            { text:'2', correct: false },
            { text:'3', correct: false },
            { text:'More than 3', correct: true },

        ],
        correct: 'More than 3'
    },
    {
        question:'HTML stands for - ',
        answers: [
            { text:'HyperText Markup Language', correct: true },
            { text:'HighText Marketing Language', correct: false },
            { text:'HyperText Links Markup Language', correct: false },
            { text:'None of the above', correct: false },

        ],
        correct: 'HyperText Markup Language'
    },
    {
        question:'CSS stands for -',
        answers: [
            { text:'Color and style sheets', correct: false },
            { text:'Cascade style sheets', correct: false },
            { text:'Cascading style sheets', correct: true },
            { text:'None of the above', correct: false },

        ],
        correct: 'Cascading style sheets'
    },
    {
        question:'What language defines the behavior of the web page?',
        answers: [
            { text:'HTML', correct: false },
            { text:'CSS', correct: false },
            { text:'Javascript', correct: true },
            { text:'Python', correct: false },

        ],
        correct: 'Javascript'
    },
    {
        question:'How do you declare a Javascript variable?',
        answers: [
            { text:'variable coffeeOrder', correct: false },
            { text:'v coffeeOrder', correct: false },
            { text:'var coffeeOrder', correct: true },
            { text:'v coffeeOrder', correct: false },

        ],
        correct: 'var coffeeOrder'
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
    btnElement.addEventListener('click', checkAnswer(event) {
        if (event.target.innerHTML == insertCodeForCurrentAnswerHere) {
            event.target.style.backgroundColor = "green";
        } else {
            do opposite
        }
    }
    )
    // append to page
    answerElement.append(btnElement);
 
    
  })
  
}

function checkAnswer() {
    console.log('This: ', this.innerText);
    console.log('Use qIndex', questions[qIndex].correct);
 
    
    

    qIndex ++;

    if ( questions.length == qIndex) {
        endTheQuiz();
    }else{
        populateQuestion();
    }
    
    if ( questions.length == qIndex) {
        quiz.style.display = "none";
    }

    

}

function endTheQuiz() {
    clearInterval(countdown);

    
    endQuiz.style.display = "flex";
    
    
}



function saveScore() {}




startBtn.addEventListener('click', startTheQuiz);