"use strict"

function fifthScript() {
    let resultArray = []

    function f(someArray) {
        for (let i = 0; i < someArray.length; i++) {
            if (someArray[i] instanceof Array) {
                f(someArray[i])
            } else {
                resultArray.push(someArray[i])
            }
        }
        return resultArray
    }

    let someArray = [1, [2], [3, [4]]]
    let result = f(someArray)
    alert(`Входные данные: ${someArray}`)
    alert(`Выходные данные: ${result}`)
    console.log(result)

}