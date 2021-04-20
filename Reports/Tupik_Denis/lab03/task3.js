function task3(){
    function createMatrix(str, col){
        let array = []
        for(let i = 0; i < str; i++){
            array[i] = []
            for(let j = 0; j < col; j++){
                let a = Math.random()*100
                a = Number.parseInt(a)
                array[i][j] = a
            }
        }
        return array
    }

    function sum(arr1, arr2){
        let array = []
        for(let i = 0; i < str; i++){
            array[i] = []
            for(let j = 0; j < col; j++){
                array[i][j] = arr1[i][j] + arr2[i][j]
            }
        }
        return array
    }

    function print(matr, row, col) {
        let str = ""
        for(let i = 0; i < row; i++) {
            for(let j = 0; j < col; j++) {
                str += "[" + matr[i][j] + "]"
            }
            str += "\n"
        }
        return str
    }

    let str = prompt("Введите количество строк: ")
    let col = prompt("Введите количество столбцов: ")

    if (isNaN(str) || isNaN(col)){
        alert("Ошибка")
        return 0
    }

    str = Number.parseInt(str)
    col = Number.parseInt(col)

    let array1 = createMatrix(str, col)
    alert(print(array1, str, col))

    let array2 = createMatrix(str, col)
    alert(print(array2, str, col))

    let array = sum(array1, array2)
    alert(print(array, str, col))
}

document.getElementById('task3').onclick = task3