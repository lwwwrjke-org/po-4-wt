function task3() {
    function createMatrix(strl, col) {
        let array = [];
        for (let i = 0; i < strl; i++) {
            array[i] = [];
            for (let j = 0; j < col; j++) {
                array[i][j] = Math.round(Math.random() * 100);
            }
        }
        return array;
    }

    function printMatrix(array, strl, col) {
        let str = "";
        for (let i = 0; i < strl; i++) {
            for (let j = 0; j < col; j++) {
                str += `${array[i][j]}` + " ";
            }
            str += "\n";
        }
        return str;
    }

    let strl1 = prompt("Число строк первой матрицы:\nstrl\ = ");
    let col1 = prompt("Число столбцов первой матрицы:\ncol = ");
    let strl2 = prompt("Число строк второй матрицы:\nstrl\ = ");
    let col2 = prompt("Число столбцов второй матрицы:\ncol = ");

    let firstMatrix  = createMatrix(strl1, col1);
    alert(printMatrix(firstMatrix, strl1, col1));

    let secondMatrix = createMatrix(strl2, col2);
    alert(printMatrix(secondMatrix, strl2, col2));

    if ((col1 == col2) && (strl1 == strl2)) {
        let sum = [];
        for (let i = 0; i < strl1; i++) {
            sum[i] = [];
            for (let j = 0; j < col1; j++) {
                sum[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
            }
        }
        let summa = printMatrix(sum, strl1, col2);
        alert(printMatrix(firstMatrix, strl1, col1) + " + " + " \n "
         + printMatrix(secondMatrix, strl2, col2) + " = " + " \n " 
         + printMatrix(sum, strl1, strl2));
    } else {
        alert("невозможно суммировать!\nРазличные размеры матриц! ");
    }
}