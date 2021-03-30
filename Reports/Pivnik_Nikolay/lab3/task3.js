function createMatrix(rows,cols){

array = new Array(rows);
for(var i = 0; i<rows;i++){
  array[i] = new Array(cols);
}

var min = 0;
var max = 100;

for(var i =0; i <rows; i++ ){
  for(var j = 0; j<cols;j++){
    array[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

return array;
}

function printMatrix (array,rows){
  for(var i =0; i <rows; i++ ){
      console.log(array[i]);
  }
  console.log("");
}

function additionTwoMatrix(array1,array2,rows,cols){
  for(var i =0; i <rows; i++ ){
    for(var j = 0; j<cols;j++){
      array1[i][j] = array1[i][j] + array2[i][j];
    }
  }
}

function start(){
array1 = new Array();
array2 = new Array();

var rows = prompt("Введите количество строк: ");
var cols = prompt("Введите начало столбцов: ");

if(rows < 1 || cols < 1 || rows == 0 || cols == 0 ){
  alert("Некорректный ввод данных!" );
  return 0;
}
  array1 = createMatrix(rows,cols);
  array2 = createMatrix(rows,cols);

  console.log("Первая маттрица: ");
  printMatrix(array,rows);
  console.log("Вторая маттрица: ");
  printMatrix(array2,rows);

  additionTwoMatrix(array1,array2,rows,cols);
  console.log("Сумма двух матриц: ");
  printMatrix(array1,rows);
}

start();
