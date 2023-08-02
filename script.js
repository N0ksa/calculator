const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".on-screen");
const buttonAC = document.getElementById("ac");
const buttonDEL = document.getElementById("del");


buttonAC.addEventListener("click", () =>{
    display.textContent = "";
} )


buttonDEL.addEventListener("click", () =>{
    display.textContent = display.textContent.slice(0, -1);
} )


buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        display.textContent += button.value;
    })
})

