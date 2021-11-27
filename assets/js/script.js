var beginQuizButton = document.getElementById('begin-btn');
var questionAnswerArea = document.getElementById('question-answers');
var titleParagraph = document.getElementById('title-p');
var results = document.querySelector('.answer-results');

var timerEl = document.getElementById('timer');
var timeRemaining;
let startTime = 60; 

var score = 0;
let highScores = [];

var questionElement = document.getElementById('populate-questions');
var answerChoices = document.getElementById("populate-answers");
let questionIndex = -1;

var answer;
var question;

var initials = document.getElementById('initials-input');
var person = document.getElementById('initial-generation');


var questions = [{
    question: "Which property can you use in order to implement event delegation?",
    choices: ["event.preventDefault()", "event.stopPropagation()", "event.target", "event.addEventListener()"],
    answer: "event.target"
},
{
    question: "You just finished the feature that you've been working on a successfully merged your branch, feature-52. How would you delete branch, feature-52?",
    choices: ["git merge feature-52", "git checkout feature-52", "git branch feature-52", "git branch -d feature-52"],
    answer: "git branch -d feature-52"
},
{
    question: "Why do we need to convert an object into JSON in order for it to properly persist to local storage?",
    choices: ["Local storage can only store strings, so we convert the object to JSON to store it properly.", "It is convention to store objects using JSON, and we must follow that pattern so that our code is easy to read.", "Local storage only accepts JSON objects.", "Local storage cannot read JavaScript, so we convert JavaScript into JSON."],
    answer: "Local storage can only store strings, so we convert the object to JSON to store it properly."
},
{
    question: "Which statement best describes what is happening to data when it is persisted to local storage.",
    choices: ["The data is stored in the client or browser.", "The data is stored under the Applications tab in Chrome Dev Tools.", "The data is stored in the window called localStorage.", "The data is stored in the database in the backend."],
    answer: "The data is stored in the client or browser."
},
{
    question: "While creating a form for a client, you decide that you do not want the corresponding browser actions to happen, and you want to implement another behavior instead. What would you use to make this possible?",
    choices: ["event.stopAction", "event.stopPropagation()", "event.preventDefault()", "event.dispatchEvent()"],
    answer: "event.stopPropagation()"
},
{
    question: "What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds?",
    choices: ["setInterval(myTimer, 3000)", "setInterval(myTimer, 300)", "setInterval(myTimer, 30)", "setInterval(myTimer, 3)"],
    answer: "setInterval(myTimer, 3000)"
},
{
    question: "Which of the following best describes a Web API?",
    choices: ["Web APIs are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web.", "Web APIs are a part of the JavaScript language itself and are built into your browser.", "Web APIs are low level code (say C or C++) that directly control the computer's GPU or other graphics functions.", "Web APIs are built into your web browser and contain methods that allow us to manipulate a web page via JavaScript."],
    answer: "Web APIs are built into your web browser and contain methods that allow us to manipulate a web page via JavaScript."
},
{
    question: "Which property can you use in order to implement event delegation?",
    choices: ["event.preventDefault()", "event.stopPropagation()", "event.target", "event.addEventListener()"],
    answer: "event.target"
}
]


beginQuizButton.addEventListener("click", openQuestionSection )

function openQuestionSection() {
   beginQuizButton.classList.add('question-answer')
   questionAnswerArea.classList.remove('question-answer');
   titleParagraph.classList.add('question-answer');
   results.classList.remove('question-answer');
   timeRemaining = 60;
   timerEl.innerText = timeRemaining;
   loadQuestions();
   setTime();
}

var setTime = function () {
    timeRemaining = 60;
        setInterval(function() {
        timeRemaining--;
        timerEl.innerText = timeRemaining;
        if (timeRemaining <=0) {
            end();
            clearInterval(timeRemaining);
            timeRemaining = 0;
        }
        }, 1000)
    }
    
function loadQuestions() {
    
    questionIndex++;

    questionElement.textContent = questions[questionIndex].question;
    answerChoices.textContent = "";
    
    var choices = questions[questionIndex].choices;

    for (var index = 0; index < choices.length; index++) {

        var next = document.createElement("button");
        next.classList.add("answer-choice")

        next.textContent = choices[index];

        next.addEventListener("click", checkAnswer);

        answerChoices.appendChild(next);
        
        checkTime();
checkQuestions();
    }
    
    document.getElementById('results').style.display = "none";
} 
    

function checkAnswer(event) {
  
    
    var answer = questions[questionIndex].answer;

    if (answer === event.target.textContent) {
        score = score +1;
        results.textContent = "Correct!"
    
    } else {
       timeRemaining = timeRemaining -10;
       results.textContent = "Incorrect!";
    }

    document.getElementById('results').style.display = "block";
    setTimeout(function(){
        loadQuestions()
    }, 1500)
}

function checkTime() {
    if (timeRemaining <= 0) {
        end(); 
    
    }
}

function checkQuestions() {
if (questionIndex === 7) {
    end();
}
}

checkTime();
checkQuestions();

function end() {
finalScoreArea.classList.remove('question-answer');
finalScore.innerText = "Your score is " + score + "!";
questionAnswerArea.classList.add('question-answer');
initials.classList.remove('question-answer');

timerEl.innerText = 0;

}

finalScoreArea = document.getElementById("final");
submitButton = document.getElementById("submit-initials");


var initialsBox = document.getElementById("initial-generation");

let listScores = {
    initials: initialsBox.value,
    highScore: score
};

function saveScore() {

   var listScores = {
        initials: initialsBox.value,
        highScore: score
}
highScores.push(listScores);
    window.localStorage.setItem('userRecord', JSON.stringify(listScores));
    // highScores.push(listScores);
    // localStorage.setItem("scores",JSON.stringify(highScores)) || [];

    seeScores();
}
checkQuestions();
submitButton.addEventListener("click", saveScore);

var scoreList = document.getElementById("view");
var finalScore = document.getElementById("final-score")
var outputL = document.getElementById('view2');

var scoresUnhide = document.getElementById("hidden-scores")

function seeScores() {
scoresUnhide.classList.remove('hide');
initials.classList.add('hide');

// localStorage.getItem("scores",JSON.stringify[highScores]);
window.localStorage.getItem('userRecord');
JSON.parse(window.localStorage.getItem('userRecord'));

scoreList.innerHTML = "userRecord";

for (i=0; i<highScores.length; i++) {
   scoreList.innerHTML = highScores[i].initials + " got " + highScores[i].highScore + " points!";
   outputL.innerHTML = highScores[i].initials + " got " + highScores[i].highScore + " points!";
};
}
