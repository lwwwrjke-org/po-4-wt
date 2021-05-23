"use script"

function thirdScipt() {
    function call() {
        let inputNumber = prompt("Введите число");
        alert("Число Фибоначчи: " + fib(inputNumber));
    }

    call()

    function fib(inputNumber) {
        let firstValue = 1;
        let secondValue = 1;
        for (let i = 3; i <= inputNumber; i++) {
            let thirdValue = firstValue + secondValue;
            firstValue = secondValue;
            secondValue = thirdValue;
        }
        return secondValue;
    }
}