const questions=[
    {
        question: "Which JavaScript method is used to remove the last element from an array? ",
        answers: [
            {text:"pop()", correct: true},
            {text:"shift()", correct: false},
            {text:"unshift()", correct: false},
            {text:"splice()", correct: false},     ]
    },
    {question: "Which of the following is a correct way to declare a function in JavaScript? ",
        answers: [
            {text:"function myFunc{ }", correct: false},
            {text:"def myFunc() { }", correct: false},
            {text:"function myFunc() { }", correct: true},
            {text:"fn myFunc() { }", correct: false},
        ]

    },
    {question: "What does === operator do in JavaScript? ",
        answers: [
            {text:"compares only value", correct: false},
            {text:"compares both value and type", correct: true},
            {text:"compares only type", correct: false},
            {text:"converts type before comparing", correct: false},
        ]

    },
    {
        question: "Which event is triggered when the user clicks on an HTML element? ",
        answers: [
            {text:"onclick", correct: true},
            {text:"onpress", correct: false},
            {text:"onhover", correct: false},
            {text:"onchange", correct: false},
        ]

    },
    {
        question: "Which keyword is used to declare a variable in JavaScript? ",
        answers: [
            {text:"var", correct: true},
            {text:"def", correct: false},
            {text:"int", correct: false},
            {text:"declare", correct: false},
        ]
    }

];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;

const isCorrect =selectedBtn.dataset.correct==="true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;

}else{
    selectedBtn.classList.add("incorrect");

}
Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled=true;

});
nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }

}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();

    }

});

startQuiz();
//good job buddy...