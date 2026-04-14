const inputDisplay = document.querySelector('#display-input')

const display = document.querySelector('#visor')

const div = document.createElement("div");

div.style.fontSize = "24px" ;
div.style.padding = "12px"

let a = "";
let b = "";
let c;
let op;

let result;

//Function for define operator and define value A

function setOperator(operator) {
    op = operator;

    a = parseFloat(a)

    div.textContent = op

    display.appendChild(div)
    
    if (a !== 0) {
        div.textContent = `${a} ${op}`
        display.appendChild(div)
    }

    if (result >= 0) {
        div.textContent = `${result} ${op}`
        display.appendChild(div)
    }

    b = 0

    inputDisplay.value = null

}

//Function for some of value A and value B

function setEquals() {

    if (result === null || result === undefined) {
        inputDisplay.value = null

        operate(op, a, b)
        
        if ( a !== null && a !== undefined && b !== null && b !== undefined) {
            div.textContent = `${result}`

            display.appendChild(div)
        }else {
            div.textContent = ""
            display.appendChild(div)
        }

        b = 0
        op = null
        c = result
    }
    else if(result !== null || result !== undefined) {
        result = null

        operate(op, c, b)

        div.textContent = `${result}`
        display.appendChild(div)

        a = 0
        b = 0
        c = result
        inputDisplay.value = null
    }
    
}

//Event for clear de calculator

const clearBtn = document.querySelector(".clear")

clearBtn.addEventListener('click', () => {
    div.textContent = ""
    display.appendChild(div)
    inputDisplay.value = ""

    a = 0;
    b = 0;
    c = 0
    result = 0;
    op = null;

})

//Event for backspace

const delBtn = document.querySelector(".del")

delBtn.addEventListener('click', () => {
    inputDisplay.value = inputDisplay.value.slice(0, -1)
    a = Number(a.toString().slice(0, -1))
    a = parseFloat(a)
})

//Functions of operations

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
    result = (a / b)
    return result.toFixed(2)
}

function rest (a, b) {
    return result = ( a % b)
}

//Function for push operations

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
        if(b === 0 ) {
            return alert("Error, can't divide by 0!")
        }

        return result = divide(a, b)
    }
}

//Define values A and Values B

const inputButtons = document.querySelectorAll(".btn-inputs")

inputButtons.forEach((inputButton) => {
    inputButton.addEventListener('click', () => {

        if (op === null || op === undefined) {


            switch (inputButton.id) {

                case "zero":
                    console.log(0)
                    a += "0"
                    a = parseFloat(a)
                    inputDisplay.value = a
                break;

                case "one":
                    console.log("1")
                    a += "1"
                    a = parseFloat(a)
                    inputDisplay.value = a
                break;

                case "two":
                    console.log(2)
                    a += "2"
                    a = parseFloat(a)
                    inputDisplay.value = a
                break;

                case "three":
                    console.log(3)
                    a += "3"
                    a = parseFloat(a)
                    inputDisplay.value = a
                break;

                case "four":
                    console.log(4)
                    a += "4"
                    a = parseFloat(a)
                    inputDisplay.value = a
                break;

                case "five":
                    console.log(5)
                    a += "5"
                    a = parseFloat(a)
                    inputDisplay.value = a
                break;

                case "six":
                    console.log(6)
                    a += "6"
                    a = parseFloat(a)
                    inputDisplay.value = a
                break;

                case "seven":
                    console.log(7)
                    a += "7"
                    a = parseFloat(a)
                    inputDisplay.value = a
                break;

                case "eight":
                    console.log(8)
                    a += "8"
                    a = parseFloat(a)
                    inputDisplay.value = a
                break;

                case "nine":
                    console.log(9)
                    a += "9"
                    a = parseFloat(a)
                    inputDisplay.value = a
                break;

                case "point":
                    console.log(".")
                    a += (".")
                    inputDisplay.value = a
                break;

            }
        } else {
            switch (inputButton.id) {

                case "zero":
                    console.log(0)
                    b += "0"
                    b = parseFloat(b)
                    inputDisplay.value = b
                break;

                case "one":
                    console.log("1")
                    b += "1"
                    b = parseFloat(b)
                    inputDisplay.value = b
                break;

                case "two":
                    console.log(2)
                    b += "2"
                    b = parseFloat(b)
                    inputDisplay.value = b
                break;

                case "three":
                    console.log(3)
                    b += "3"
                    b = parseFloat(b)
                    inputDisplay.value = b
                break;

                case "four":
                    console.log(4)
                    b += "4"
                    b = parseFloat(b)
                    inputDisplay.value = b
                break;

                case "five":
                    console.log(5)
                    b += "5"
                    b = parseFloat(b)
                    inputDisplay.value = b
                break;

                case "six":
                    console.log(6)
                    b += "6"
                    b = parseFloat(b)
                    inputDisplay.value = b
                break;

                case "seven":
                    console.log(7)
                    b += "7"
                    b = parseFloat(b)
                    inputDisplay.value = b
                break;

                case "eight":
                    console.log(8)
                    b += "8"
                    b = parseFloat(b)
                    inputDisplay.value = b
                break;

                case "nine":
                    console.log(9)
                    b += "9"
                    b = parseFloat(b)
                    inputDisplay.value = b
                break;

                case "point":
                    console.log(".")
                    b += (".")
                    inputDisplay.value = b
                break;

            }       
        }

    })
})