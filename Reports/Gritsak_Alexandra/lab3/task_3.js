function task_3(){
function create_matrix(rows, cols) { // генерируем матрицу, содержащую рандомные числа
        let array = [];
        for (let i = 0; i < rows; i++) {
            array[i] = [];
            for (let j = 0; j < cols; j++) {
                array[i][j] = Math.round(Math.random() * 100);
            }
        }
        return array;
    }

    function print_matrix(array, rows, cols) { //вывод матрицы
        let str = "";
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                str += `${array[i][j]}` + " ";
            }
            str += "\n";
        }
        return str;
    }

    let rows1 = prompt("Введите количество строк 1-ой матрицы: ");
    let cols1 = prompt("Введите количество столбцов 1-ой матрицы: ");
    let rows2 = prompt("Введите количество строк 2-ой матрицы: ");
    let cols2 = prompt("Введите количество столбцов 2-ой матрицы: ");

    let matrix1  = create_matrix(rows1, cols1);
    alert("Первая матрица: \n" + print_matrix(matrix1, rows1, cols1));

    let matrix2 = create_matrix(rows2, cols2);
    alert( "Вторая матрица: \n" + print_matrix(matrix2, rows2, cols2));
    
    if ((cols1 == cols2) && (rows1 == rows2)) { //проверка условия сложения матриц
        let sum = [];
        for (let i = 0; i < rows1; i++) {
            sum[i] = [];
            for (let j = 0; j < cols1; j++) {
                sum[i][j] = matrix1[i][j] + matrix2[i][j];
            }
        }
    
        let summ = print_matrix(sum, rows1, cols2);
        alert("Результат суммирования: \n" +  print_matrix(sum, rows1, rows2) );
    } else {
        alert("Матрицы не могут быть сложены! ");
    }
} 
