function task_3(){

    function generate_matrix (row, column){
        if (row <= 0 || column <= 0){ //проверка на корректность ввода данных
            alert("Неккоректный ввод данных!!Попробуйте снова:)");
        }
        let matrix = create_matrix(row, column) //вызов функции создания матрицы
        for (let i = 0; i < row; i++){
            for (let j = 0; j < column; j++){
                matrix[i][j] = Math.floor(Math.random() * 100); // заполнение матрицы случайными числами в диапазоне от 0 до 100
            }
        }
        return matrix; //возвращаем сгенерированную матрицу
    }
    function create_matrix(row, column){ //создаем массив
        let matrix = new Array(row);
        for (let i = 0; i < row; i++){
            matrix[i] = new Array(column);
        }
        return matrix;
    }

    function sum_matrix(matrix1, matrix2){ //функция суммирования
        if (matrix1.length == matrix2.length ){
            let row = matrix1.length;
            let column = matrix1[0].length; //где matrix1[0].length - длина первого элемента матрицы
            let matrix = create_matrix(row, column);
            for (let i = 0; i < row; i++){
                for (let j = 0; j < column; j++){
                    matrix[i][j] = matrix1[i][j] + matrix2[i][j];
                }
            }
            return matrix;
        }
        else{
            alert("Матрицы не могут быть сложены из-за разной размерности:(");
        }
    }

    let matrix1 = generate_matrix(1, 5);
    alert( "Первая матрица:"+ matrix1);
    let matrix2 = generate_matrix(2, 5);
    alert( "Вторая матрица:"+ matrix2);
    let result = sum_matrix(matrix1, matrix2);
    for (let i = 0; i < result.length; i++){
        alert(result[i]);
    }
}