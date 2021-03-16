while(1){

var a = prompt("Введите количество строк: "); 
if(isNaN(a)){ alert("Неверные данные"); throw "Error"; }
a = Number.parseInt(a);

var b = prompt("Введите количество столбцов: "); 
if(isNaN(b)){ alert("Неверные данные"); throw "Error"; }
b = Number.parseInt(b);

function MatrixForPrint(matr, rows) {
	let str = "[";
	for(i = 0; i < rows; i++) {
		str += "[" + matr[i] + "]";
		if(i != rows-1) {
			str += "\n";
		}
	}
	str += "]";
	return str;
}

function createMatrix(nrow, ncol){
	var A = [];
	for(var i = 0; i < nrow; i++){
		A[i] = [];
		for(var j = 0; j < ncol; j++){
			A[i][j] = Math.floor(Math.random()*100);
		}
	}
	alert(MatrixForPrint(A, nrow));
}
createMatrix(a, b);

function summ(nr, nc){
	var arr1 = [];
	var arr2 = [];
	for(var i = 0; i < nr; i++){
		arr1[i] = [];
		arr2[i] = [];
		for(var j = 0; j < nc; j++){
			arr1[i][j] = Math.floor(Math.random()*100);
			arr2[i][j] = Math.floor(Math.random()*100);
		}
	}
	alert("Matrix 1"); alert(MatrixForPrint(arr1, nr));
	alert("Matrix 2"); alert(MatrixForPrint(arr2, nr));
	var arr = [];
	for(var i = 0; i < nr; i++){
		arr[i] = [];
		for(var j = 0; j < nc; j++){
          	arr[i][j] = arr1[i][j] + arr2[i][j];
		}
	}
	alert("SumMatrix"); alert(MatrixForPrint(arr, nr));
}
summ(a, b);
}