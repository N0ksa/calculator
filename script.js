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
            console.log(previousKey);
        }
         else{
            display.textContent = displayValue + keyValue;
    
        }



        calculator.dataset.previousKey = "operand";
    }

    if (keyType === "operator"){
        calculator.dataset.previousKey = "operator";
    }
    


})