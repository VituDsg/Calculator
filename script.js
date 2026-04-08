const display = document.querySelector('#display-input')

let a;
let b;
let op;

function setOperator(operator) {
    op = operator;

    a = display.value
    a = parseFloat(a)


    display.value = null
}

function setEquals() {
    b = display.value
    b = parseFloat(b)

    console.log(a)
    console.log(b)

    operate(op, a, b)
}

function add (a, b) {
    console.log( a + b)

}

function subtract (a, b) {
    console.log( a - b)

}

function multiply (a, b) {
    console.log( a * b)

}

function divide (a, b) {
    console.log( a/b)
}

function operate (op, a, b) {
    
    if (op === "+") {
        return add(a, b)

    } 
    else if (op === "-") {
        return subtract(a, b)

    }
    else if (op === "*") {
        return multiply(a, b)

    }
    else if (op === "/") {
        if(b === 0 ) return alert("Error, can't divide by 0!")

        return divide(a, b)
    }
}

const inputButtons = document.querySelectorAll(".btn-inputs")

inputButtons.forEach((inputButton) => {
    inputButton.addEventListener('click', () => {

        switch (inputButton.id) {

            case "zero":
                console.log(0)
                display.value += 0
            
            break;

            case "one":
                console.log("1")
                display.value += 1

            break;

            case "two":
                console.log(2)
                display.value += 2
            
            break;

            case "three":
                console.log(3)
                display.value += 3
            
            break;

            case "four":
                console.log(4)
                display.value += 4
            
            break;

            case "five":
                console.log(5)
                display.value += 5
            
            break;

            case "six":
                console.log(6)
                display.value += 6
            
            break;

            case "seven":
                console.log(7)
                display.value += 7
            
            break;

            case "eight":
                console.log(8)
                display.value += 8
            
            break;

            case "nine":
                console.log(9)
                display.value += 9
            
            break;

            case "point":
                console.log(".")
                display.value += (".")
            
            break;

        }

    })
})