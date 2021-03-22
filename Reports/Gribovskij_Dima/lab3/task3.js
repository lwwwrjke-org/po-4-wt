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

    let rows1 = prompt("Num of rows of first matrix:\nrows = ");
    let cols1 = prompt("Num of cols of first matrix:\ncols = ");
    let rows2 = prompt("Num of rows of second matrix:\nrows = ");
    let cols2 = prompt("Num of cols of second matrix:\ncols = ");

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
        let summi = printMatrix(sum, rows1, cols2);
        alert(printMatrix(firstMatrix, rows1, cols1) + " + " + " \n "
         + printMatrix(secondMatrix, rows2, cols2) + " = " + " \n " 
         + printMatrix(sum, rows1, rows2));
    } else {
        alert("Can't sum!\nMatrix not equal size! ");
    }
}