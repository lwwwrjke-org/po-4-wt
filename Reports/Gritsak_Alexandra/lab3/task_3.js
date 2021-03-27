function task_3(){
    function create_matrix (row, column){
        if (row <= 0 || column <= 0){ //проверка на корректность ввода данных
            console.log ('Неккоректный ввод данных!!Попробуйте снова:)');
        }
        else {
            let matrix = [];
            for (let i=0; i<row; i++){
                matrix [i]=[];
                for (let j=0; j<column; j++){
                    matrix [i] [j] = Math.floor(Math.random() * 100);
                }
            }
            return matrix;
        }
    }

    function sum_matrix(a,b){ //функция суммирования
        if (a.length!=b.length || a[0].length!=b[0].length ){
            console.log ("Матрицы не равны, суммирование невозможно.");
        }
        else {
            let array=[]
            for (let i=0;i<a.length;i++){
                c [i]=[];
                 for (let j=0; j<a[0].length; j++){
                 array [i] [j] = a[i][j]+b[i][j];
            }
    }
    return array;
        }
        
    }

    let matrix1 = create_matrix(1, 5);
    let matrix2 = create_matrix(1, 5);
    console.log (matrix1, matrix2);
    console.log (sum_matrix (matrix1, matrix2));
    return 0;
}
