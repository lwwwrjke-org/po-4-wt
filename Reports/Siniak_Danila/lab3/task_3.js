function TASK_3()
{
    function randomInteger(min, max) {
        var max =Math.floor(Math.random() * 50);
        rand = Math.round(max);
        return rand;
    }

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

    function createMatrix(rows, columns) {
        var a = [];
        for (var i = 0; i < rows; i++) {
            var b = [];
            for (var j = 0; j < columns; j++) {
                b.push(randomInteger(0, 10));
            }
            a.push(b);
        }
        alert(MatrixForPrint(a,rows));
    }

    createMatrix(5,5);
    
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
	var arr = [];
	for(var i = 0; i < nr; i++){
		arr[i] = [];
		for(var j = 0; j < nc; j++){
          	arr[i][j] = arr1[i][j] + arr2[i][j];
		}
	}
	alert("SumMatrix"); alert(MatrixForPrint(arr, nr));
}
}