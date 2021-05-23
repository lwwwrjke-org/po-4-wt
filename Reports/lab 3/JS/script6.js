"use strict"

function sixthScript() {

    function f(someValue) {
        let splitValue
        let repeatsValue = []
        let resultValue = []

        if (typeof someValue === "string") {
            splitValue = someValue.split('')
        } else {
            splitValue = someValue
        }
        for (let value of splitValue) {
            repeatsValue[value] = (repeatsValue[value] || 0) + 1;
        }

        for (let i in splitValue) {
            if (repeatsValue[splitValue[i]] < 3) {
                resultValue.push(splitValue[i]);
            }
        }
        alert(`Входные данные: ${someValue}`)
        alert(`Выходные данные: ${resultValue}`)
    }

    f("sssdsssq")
}