function createMatrix (rows, cols) {

	array = new Array(rows);
	for(let i = 0; i < rows; i++){
		array[i] = new Array(cols);
	}

for(let i = 0; i < rows; i++){
	for(let j = 0; j < cols; j++){
	array[i][j] = Math.floor(Math.random() * 100);
	}
}
	return array;
}

function MatrixSum(array1, array2, rows, cols){
	
	for(let i = 0; i < rows; i++){
		for(let j = 0; j < cols; j++){
			array1[i][j] += array2[i][j];
		}
	}
	return array1;
}

function WriteMatrix(array){
	for(let i = 0; i < array.length; i++){
		console.log(array[i]);
	}
	console.log(" ");
}



let rows = prompt("Введите длину матрицы: ");
if ( isNaN(rows) || rows <= 0 ) {                               
	alert("Неккоректный ввод данных");
	throw new Error;	
}

let cols = prompt("Введите ширину матрицы: ");
if ( isNaN(cols) || cols <= 0 ) {                               
	alert("Неккоректный ввод данных");
	throw new Error;	
}

let matrix1 = createMatrix(rows, cols);
console.log("Первая матрица");
WriteMatrix(matrix1);

let matrix2 = createMatrix(rows, cols);
console.log("Втораая матрица");
WriteMatrix(matrix2);

let result = MatrixSum(matrix1, matrix2, rows, cols);
console.log("Сумма матриц");
WriteMatrix(result);