function task3() {
    function createMatrix(rows, cols) {
        let array = [];
        for (let i = 0; i < rows; i++) {
            array[i] = [];
            for (let j = 0; j < cols; j++) {
                array[i][j] = Math.round(Math.random() * 100);
            }
        }
        return array;
    }

    function printMatrix(array, rows, cols) {
        let str = "";
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                str += `${array[i][j]}` + " ";
            }
            str += "\n";
        }
        return str;
    }

    let rows1 = prompt("Кол-во строк первой матрицы:\nrows = ");
    let cols1 = prompt("Кол-во столбцов первой матрицы:\ncols = ");
    let rows2 = prompt("Кол-во строк второй матрицы:\nrows = ");
    let cols2 = prompt("Кол-во столбцов второй матрицы:\ncols = ");

    let firstMatrix  = createMatrix(rows1, cols1);
    alert(printMatrix(firstMatrix, rows1, cols1));

    let secondMatrix = createMatrix(rows2, cols2);
    alert(printMatrix(secondMatrix, rows2, cols2));

    if ((cols1 == cols2) && (rows1 == rows2)) {
        let sum = [];
        for (let i = 0; i < rows1; i++) {
            sum[i] = [];
            for (let j = 0; j < cols1; j++) {
                sum[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
            }
        }
        let sum_matrix = printMatrix(sum, rows1, cols2);
        alert(printMatrix(firstMatrix, rows1, cols1) + " + " + " \n "
         + printMatrix(secondMatrix, rows2, cols2) + " = " + " \n " 
         + printMatrix(sum, rows1, rows2));
    } else {
        alert("Невозможно просуммировать!\nМатрицы различных размеров! ");
    }
}