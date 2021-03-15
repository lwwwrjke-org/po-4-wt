function TASK3(){
    function makeMatrix(row, column){
        let matrix = new Array(row);
        for (let i = 0; i < row; i++){
            matrix[i] = new Array(column);
        }
        return matrix;
    }

    function createMatrix(row, column){
        if (row <= 0 || column <= 0){
            alert("Invalid array length");
            throw "Invalid array length";
        }
        let matrix = makeMatrix(row, column)
        for (let i = 0; i < row; i++){
            for (let j = 0; j < column; j++){
                matrix[i][j] = Math.floor(Math.random() * 100);
            }
        }
        return matrix;
    }

    function additionMatrix(matrix1, matrix2){
        if (matrix1.length == matrix2.length && matrix1[0].length == matrix2[0].length){
            let row = matrix1.length;
            let column = matrix1[0].length;
            let matrix = makeMatrix(row, column);
            for (let i = 0; i < row; i++){
                for (let j = 0; j < column; j++){
                    matrix[i][j] = matrix1[i][j] + matrix2[i][j];
                }
            }
            return matrix;
        }
        else{
            alert("Matrices are not the same size");
            throw "Matrices are not the same size";
        }
    }

    let matrix1 = createMatrix(1, 5);
    let matrix2 = createMatrix(1, 5);
    let result = additionMatrix(matrix1, matrix2);
    for (let i = 0; i < result.length; i++){
        alert(result[i]);
    }
}