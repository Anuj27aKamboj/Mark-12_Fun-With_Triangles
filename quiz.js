const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["105°","right-angled","Equilateral","2","Isosceles","Hypotenuse"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score+1;
        }
        index = index+1;
    }
    console.log("score: ",score);
    outputEl.innerText = "Your Score is: " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);