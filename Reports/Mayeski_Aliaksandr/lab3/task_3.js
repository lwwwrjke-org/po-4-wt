function TASK_3() {
    function createMatrix() {
        var col = prompt("Количество столбцов: ");
        col = Number.parseInt(col)
        var str = prompt("Количество строк: ");
        str = Number.parseInt(str)

        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < col; i++){
            arr1[i] = []
            arr2[i] = []
            for (var j = 0; j < str; j++) {
                arr1[i][j] = Math.floor(Math.random() * Math.floor(100))  
                arr2[i][j] = Math.floor(Math.random() * Math.floor(100))  
            }
        }
        var sumArr = [];
        for (var i = 0; i < col; i++) {
            sumArr[i] = [];
            for (var j = 0; j < str; j++)
                sumArr[i][j] = arr1[i][j] + arr2[i][j];
        }
        for (var i = 0; i < col; i++) {
            alert(sumArr[i])
        }
        
    }
    createMatrix() // не знаю как вывести всё в виде матрицы, но оно работает))))
}