const inputDisplay = document.querySelector('#display-input')

const display = document.querySelector('#visor')

let a = null;
let b = null;
let c = null;
let op = null;

let result;

function setOperator(operator) {

    op = operator;

    if (c !== null) {

        a = parseFloat(c)
        display.textContent = `${a} ${op}`
    } else {
        a = parseFloat(inputDisplay.value)
        display.textContent = `${a} ${op}`
    }
    
    inputDisplay.value = null
}

function setEquals() {
    
    b = parseFloat(inputDisplay.value)

    if ( a === null || b === null) {
        alert("Please, enter a value")
    }

    inputDisplay.value = null

    operate(op, a, b)
    
    if ( a !== null && a !== undefined && b !== null && b !== undefined) {
        display.textContent = `${a} ${op} ${b} = ${result}`
    }else {
        display.textContent = ""
    }

    let c = result;

    a = null
    b = null
    op = null;
}

const clearBtn = document.querySelector(".clear")

clearBtn.addEventListener('click', () => {
    display.textContent = ""
    inputDisplay.value = null

    a = null
    b = null
    op = null
})

const delBtn = document.querySelector(".del")

delBtn.addEventListener('click', () => {

    inputDisplay.value = inputDisplay.value.slice(0, -1)
})

function add (a, b) {
    return result = (a + b)

}

function subtract (a, b) {
    return result = (a - b)

}

function multiply (a, b) {
    return result = (a * b)

}

function divide (a, b) {
    return result = (a / b)
}

function rest (a, b) {
    return result = ( a % b)
}

function operate (op, a, b) {
    
    if (op === "+") {
        return result = add(a, b)

    } 
    else if (op === "-") {
        return result = subtract(a, b)

    }
    else if (op === "*") {
        return result = multiply(a, b)

    }
    else if( op === "%") {
        return result = rest(a, b)
    }
    else if (op === "/") {
        if(b === 0 ) return alert("Error, can't divide by 0!")

        return result = divide(a, b)
    }
}

const inputButtons = document.querySelectorAll(".btn-inputs")

inputButtons.forEach((inputButton) => {
    inputButton.addEventListener('click', () => {

        switch (inputButton.id) {

            case "zero":
                console.log(0)
                inputDisplay.value += 0
            
            break;

            case "one":
                console.log("1")
                inputDisplay.value += 1

            break;

            case "two":
                console.log(2)
                inputDisplay.value += 2
            
            break;

            case "three":
                console.log(3)
                inputDisplay.value += 3
            
            break;

            case "four":
                console.log(4)
                inputDisplay.value += 4
            
            break;

            case "five":
                console.log(5)
                inputDisplay.value += 5
            
            break;

            case "six":
                console.log(6)
                inputDisplay.value += 6
            
            break;

            case "seven":
                console.log(7)
                inputDisplay.value += 7
            
            break;

            case "eight":
                console.log(8)
                inputDisplay.value += 8
            
            break;

            case "nine":
                console.log(9)
                inputDisplay.value += 9
            
            break;

            case "point":
                console.log(".")
                inputDisplay.value += (".")
            
            break;

        }

    })
})