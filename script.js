const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator")





buttons.addEventListener("click", e => {
    if (!e.target.closest(".btn")) return;

    const key = e.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const keyType = key.dataset.type;

    const previousKey = calculator.dataset.previousKey;

    if (keyType === "operand"){
        if (displayValue === "0"){
            display.textContent = keyValue;
        }else if (previousKey === "operator"){
            display.textContent = keyValue;
        }
         else{
            display.textContent = displayValue + keyValue;
    
        }



       
    }

    if (keyType === "operator"){
        const operatorKeys = calculator.querySelectorAll('[data-type = "operator"]');
        operatorKeys.forEach(operatorKey => operatorKey.dataset.state = "");
        key.dataset.state = "selected";


        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operation = key.dataset.action;

    }


    if (keyType === "equal"){
        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operation;
        const secondNumber = displayValue;
        console.log(firstNumber, operator, secondNumber);
        display.textContent = mathOperation(firstNumber, secondNumber, operator);
    }
    

    calculator.dataset.previousKey = keyType;


})



function mathOperation(firstNumber, secondNumber, operator){
    let result = "";
    firstNumberTemp = parseInt(firstNumber);
    secondNumberTemp = parseInt(secondNumber);
    if (operator == "divide")  result = firstNumberTemp / secondNumberTemp;
    if (operator == "modulo") result = firstNumberTemp % secondNumberTemp;
    if (operator == "add") result = firstNumberTemp + secondNumberTemp;
    if (operator == "subtract") result = firstNumberTemp - secondNumberTemp;
    if (operator == "multiply") result = firstNumberTemp * secondNumberTemp;
    return result;
}