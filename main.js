//Values
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const inputNumber = document.querySelector("#inputNumber")


let randomNumber = Math.round(Math.random() * 10);

document.get
let xAttempts = 1;




// Events
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keypress', function(e) {
    if(e.key = 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

//Callback functions

function handleTryClick(event) {
    event.preventDefault();

    let emptyInput = inputNumber.value === ''
    
    let incorrectInput = Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 
      
    

     if(emptyInput || incorrectInput) {
        
         alert('Insira um número entre 0 e 10')               

    } else {

        if(Number(inputNumber.value) == randomNumber) {
            toggleScreen()
        
            if(xAttempts === 1) {
                screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa`
            } else {
                screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
            }             
                
        }
        
        inputNumber.value = ""
        xAttempts++
    }       
                   
     } 


function handleResetClick() {
    toggleScreen()  
    
    xAttempts = 1;
    randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {

    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}





