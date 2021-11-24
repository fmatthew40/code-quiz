

var beginQuizButton = document.getElementById('begin-btn');
var questionAnswerArea = document.getElementById('question-answers');
var titleParagraph = document.getElementById('title-p');

var timerEl = document.getElementById('timer');

var timeRemaining;
let startTime = 79; 



beginQuizButton.addEventListener("click", openQuestionSection)

function openQuestionSection() {
   beginQuizButton.classList.add('question-answer')
   questionAnswerArea.classList.remove('question-answer');
   titleParagraph.classList.add('question-answer');
}

var setTime = function () {
        timeRemaining = 80;
    var checkTime = setInterval(function() {
        timerEl.innerText = timeRemaining;
        timeRemaining--

        // if (end) {
        //     clearInterval(checkTime)
        // }
       
        // if (timeRemaining < 0) {
        //     Score()
        //     timerEl.innerText = 0
        //     clearInterval(checkTime)
        // }

        }, 1000)
    }
   
setTime()

function loadQuestions() {
    setInterval()
}





// const questions = [{
//     question: "Which property can you use in order to implement event delegation?",
//     choices: ["event.preventDefault()", "event.stopPropagation()", "event.target", "event.addEventListener()"],
//     answer: "event.target"
// },
// {
//     question: "Which of the following is NOT an example of why we use client-side storage?",
//     choices: ["It is best practice to use client-side storage to store sensitive information, like a user's payment information.", "It allows us to store the contents of a user's shopping cart from a previous session.", "We use it to remember a user's preferences.", "It can allow a user to use a site without a network connection."],
//     answer: "It can allow a user to use a site without a network connection."
// },
// {
//     question: "You just finished the feature that you've been working on a successfully merged your branch, feature-52. How would you delete branch, feature-52?",
//     choices: ["git merge feature-52", "git checkout feature-52", "git branch feature-52", "git branch -d feature-52"],
//     answer: "git branch -d feature-52"
// },
// {
//     question: "Why do we need to convert an object into JSON in order for it to properly persist to local storage?",
//     choices: ["Local storage can only store strings, so we convert the object to JSON to store it properly.", "It is convention to store objects using JSON, and we must follow that pattern so that our code is easy to read.", "Local storage only accepts JSON objects.", "Local storage cannot read JavaScript, so we convert JavaScript into JSON."],
//     answer: "Local storage can only store strings, so we convert the object to JSON to store it properly."
// },
// {
//     question: "Which statement best describes what is happening to data when it is persisted to local storage.",
//     choices: ["The data is stored in the client or browser.", "The data is stored under the Applications tab in Chrome Dev Tools.", "The data is stored in the window called localStorage.", "The data is stored in the database in the backend."],
//     answer: "The data is stored in the client or browser."
// },
// {
//     question: "While creating a form for a client, you decide that you do not want the corresponding browser actions to happen, and you want to implement another behavior instead. What would you use to make this possible?",
//     choices: ["event.stopAction", "event.stopPropagation()", "event.preventDefault()", "event.dispatchEvent()"],
//     answer: "event.stopPropagation()"
// },
// {
//     question: "What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds?",
//     choices: ["SetInterval(myTimer, 3000)", "setInterval(myTimer, 300)", "setInterval(myTimer, 30)", "setInterval(myTimer, 3)"],
//     answer: "setInterval(myTimer, 3000)"
// },
// {
//     question: "Which of the following best describes a Web API?",
//     choices: ["Web APIs are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web.", "Web APIs are a part of the JavaScript language itself and are built into your browser.", "Web APIs are low level code (say C or C++) that directly control the computer's GPU or other graphics functions.", "Web APIs are built into your web browser and contain methods that allow us to manipulate a web page via JavaScript."],
//     answer: "Web APIs are built into your web browser and contain methods that allow us to manipulate a web page via JavaScript."
// }
// ]