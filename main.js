let firstNumber = '';
let operation = '';
let secondNumber = '';


const buttons = document.querySelectorAll('.button')
buttons.forEach(button =>{
    button.addEventListener('click', function(event){
        buttonPressed(event.target.innerText)
        })
})

function buttonPressed(buttonTitle){
    if(buttonTitle === "+" ||
        buttonTitle === "-" ||
        buttonTitle === "*" ||
        buttonTitle === "/"
    ){

                if(firstNumber.length > 0){
            operation = buttonTitle
            display()
        }
    }else if(buttonTitle === '.' ||
            buttonTitle === '0' ||
            buttonTitle === '1' || 
            buttonTitle === '2' ||
            buttonTitle === '3' ||
            buttonTitle === '4' ||
            buttonTitle === '5' ||
            buttonTitle === '6' ||
            buttonTitle === '7' ||
            buttonTitle === '8'||
            buttonTitle === '9'){
        if (firstNumber.length > 0 && operation.length > 0){
            secondNumber += buttonTitle
            display()
        }else if(operation.length === 0)
        firstNumber += buttonTitle
        display()
    }
}


function display(){
    const display = document.querySelector('#display')
    display.innerText = firstNumber + operation + secondNumber
}


//TODO

//Edge Cases:
//ignore 0 if firstNumber or secondNumber doesn't exist

// . => you can't have more than 1 . in a number

// equal sign working with eval()

// if an operator is pressed when a full equation is made, calculate and save as the firstNumber with that operator 


//SWITCH STATEMENT (REPLACES IF/ELSES)
