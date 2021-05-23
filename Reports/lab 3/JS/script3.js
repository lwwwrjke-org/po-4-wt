"use strict"

function thirdScript() {

    let rowsCount
    let columnsCount

    function callPrompt() {
        rowsCount = Number(prompt("Введите количество строк"))
        columnsCount = Number(prompt("Введите количество столбцов"))
    }

    callPrompt()

    if (isNaN(rowsCount)) {
        alert("Упс, что-то пошло не так!")
        callPrompt()
    } else if (isNaN(columnsCount)) {
        alert("Упс, что-то пошло не так!")
        callPrompt()
    }

    function matrixCreate() {
        let matrix = []
        for (let i = 0; i < rowsCount; i++) {
            let rowTemp = []
            for (let j = 0; j < columnsCount; j++) {
                let randomNumber = Math.floor(Math.random() * 100)
                rowTemp.push(randomNumber)
            }
            matrix.push(rowTemp)
        }
        return matrix
    }

    let firstMatrix = matrixCreate()
    let secondMatrix = matrixCreate()

    alert(`Первая матрица: ${firstMatrix}`)
    alert(`Вторая матрица: ${secondMatrix}`)

    function matrixSum() {
        let firstValue = firstMatrix.length
        let secondValue = firstMatrix[0].length
        let matrixSum = []

        for (let i = 0; i < firstValue; i++) {
            matrixSum[i] = []
            for (let j = 0; j < secondValue; j++) {
                matrixSum[i][j] = firstMatrix[i][j] + secondMatrix[i][j]
            }
        }
        return matrixSum
    }

    let result = matrixSum()
    alert(`Сумма матриц: ${result}`)
}
