"use strict"

function firstScript() {

    let firstNumber
    let secondNumber
    let step

    function callPrompt() {
        firstNumber = Number(prompt("Введите начало дипазона"))
        secondNumber = Number(prompt("Введите конец диапазона"))
        step = Number(prompt("Введите шаг"))
    }

    callPrompt()

    if (isNaN(firstNumber)) {
        alert("Упс, что-то пошло не так!")
        callPrompt()
    } else if (isNaN(secondNumber)) {
        alert("Упс, что-то пошло не так!")
        callPrompt()
    } else if (isNaN(step)) {
        alert("Упс, что-то пошло не так!")
        callPrompt()
    }

    let rangeArray = []
    let current = firstNumber

    step = step || 0
    if (step > 0) {
        while (current <= secondNumber) {
            rangeArray.push(current)
            current += step
        }
    } else {
        while (current >= secondNumber) {
            rangeArray.push(current)
            current += step
        }
    }

    alert(rangeArray)
}

