const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#answer-btn");
const outputText = document.querySelector(".output");


function calculateSumOfAngle(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}





function isTrinagle(){
    const sumOfAngles = calculateSumOfAngle(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))

    if(sumOfAngles === 180){
        outputText.innerText= "Yay! Angles form a triangle";
    }else{
        outputText.innerText= "Ohh! Angles don't form a triangle";
    }
}





isTriangleBtn.addEventListener("click", isTrinagle);