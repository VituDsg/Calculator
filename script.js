const display = document.querySelector('#display-input')

let a;
let b;

function add (a, b) {
    return a + b;

}

function subtract (a, b) {
    return a - b;

}

function multiply (a, b) {
    return a * b;

}

function divide (a, b) {
    return a/b;
}

function operate (op, a, b) {
    
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

        }

    })
})


display.textContent(a)

console.log(add(5, 6))
console.log(subtract(5,3))
console.log(multiply(2,5))
console.log(divide(10,2))