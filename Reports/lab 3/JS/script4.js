"use strict"

function fourScript() {
    function union(...someArrays) {
        let newArray = []

        for (let i = 0; i < someArrays.length; i++) {
            newArray = newArray.concat(someArrays[i])
        }

        newArray = Array.from(new Set(newArray))
        return newArray

    }

    alert(`Массивы на вход: [1, 2, 2, 3], [101, 2, 1, 10], [2, 1]`)
    let outputArray = union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1])
    alert(`Массив на выход: ${outputArray}`)

}