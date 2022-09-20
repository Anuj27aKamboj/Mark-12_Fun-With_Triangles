const sideInputs = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#answer-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(l1, l2){
    const sumOfSquares = (l1**2) + (l2**2);
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sideInputs[0].value), Number(sideInputs[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "Hypotenuse is : "+lengthOfHypotenuse;

}



hypotenuseBtn.addEventListener("click", calculateHypotenuse);