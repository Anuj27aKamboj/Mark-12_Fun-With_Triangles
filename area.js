const sideInputs = document.querySelectorAll(".side-input");
const calculateAreaBtn = document.querySelector("#calculate-area-btn");
const outputEl = document.querySelector("#output");


function calculateArea(){
    const triangleArea = 0.5*Number(sideInputs[0].value)*Number(sideInputs[1].value);
    outputEl.innerText = "The area of triangle is : "+triangleArea;
}



calculateAreaBtn.addEventListener("click", calculateArea);