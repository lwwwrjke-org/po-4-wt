const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');
const task4 = document.querySelector('#task4');
const task5 = document.querySelector('#task5');
const task6 = document.querySelector('#task6');


function range()
{
    while(true){
        let start = prompt("Введите начало массива: ");
        start = Number(start);
        if(isNaN(start)){
            alert("Введите число!");
            break;
        }
        let end = prompt("Введите конец массива: ");
        end = Number(end);
        if(isNaN(end)){
            alert("Введите число!");
            break;
        }
        let step = prompt("Введите шаг: ");
        step = Number(step);
        if(isNaN(step)){
            alert("Введите число!");
            break;
        }
        let arr = [];
        
        for (i = start; i <= end; i += step){
            arr.push(i);
        }
        alert('Массив: [' + arr + ']');
        break;

    }
        
    

}

function Sort(){

    while(true){

        let quantity = prompt("Введите количество элементов массива: ");
        quantity = Number(quantity);
        if(isNaN(quantity)){
            alert("Введите число!");
        }

        let arr2 = [];
        for(let i = 1; i <= quantity; i++){
            var a = prompt("Введите " + i + " элемент массива:");
            arr2.push(a);
        }
        alert(arr2.sort(function(a, b){
            return a - b;
        }));
        break;
    }
}

function Matrix(){
    
    while(true){

        let strings = prompt("Введите количество строк: ");
        strings = Number(strings);
        if(isNaN(strings)){ 
            alert("Введите число! ");
            break;
        }
        let colums = prompt("Введите количество столбцов: ");
        colums = Number(colums);
        if(isNaN(colums)){ 
            alert("Введите число! ");
            break;
        }

        function MatrixPrint(matr, rows){
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


        function createMatrix(numstr, numcol){
            let matrix = [];

            for(var i = 0; i < numstr; i++){
                matrix[i] = [];
                for(var j = 0; j < numcol; j++){
                    matrix[i][j] = Math.floor(Math.random()*100);
                }
            }
            alert(MatrixPrint(matrix, numstr));
        }
        createMatrix(strings, colums);


        function MatrixSumm(nr, nc){

            let arr1 = [];
            let arr2 = [];
            for(var i = 0; i < nr; i++){
                arr1[i] = [];
                arr2[i] = [];
                for(var j = 0; j < nc; j++){
                    arr1[i][j] = Math.floor(Math.random()*100);
                    arr2[i][j] = Math.floor(Math.random()*100);
                }
            }
            alert("Matrix 1"); alert(MatrixPrint(arr1, nr));
            alert("Matrix 2"); alert(MatrixPrint(arr2, nr));
            let arr = [];
            for(var i = 0; i < nr; i++){
                arr[i] = [];
                for(let j = 0; j < nc; j++){
                      arr[i][j] = arr1[i][j] + arr2[i][j];
                }
            }
            alert("SumMatrix"); alert(MatrixPrint(arr, nr));
        }
        MatrixSumm(strings, colums);
        break;
    }
}

function union(){

    while(true){

        let firarr = [1, 96, 53, 213];
        let secarr = [96, 3, 1, 3, 4];
        let thirdarr = [53, 6, 213];

        let mixedarrs = firarr.concat(secarr).concat(thirdarr);
        alert("Все элементы трех массивов:" + mixedarrs);

        let union = [...new Set([...firarr, ...secarr, ...thirdarr])];
        alert("Только уникальные элементы:" + union);
        break;
    }

}


function flatten() {
    let res = flatten([1, [2], [3, [4]]]);
    alert(res);
  
    function flatten(arr) {
      let res = [];
  
      (function flattening(arr) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] instanceof Array) {
            flattening(arr[i]);
          } else {
            res.push(arr[i]);
          }
        }
      }(arr));
  
      return res;
    }
};
  
function deliting_tripls(argument){

    let arr = [];
	let del = [];
	if (!(argument instanceof Array)) {
        argument = argument.split('');
    }
	for (let i of argument) {
        del[i] = (del[i] || 0) + 1;
    }
	for (let j in argument) {
        if (del[argument[j]] < 3) {
            arr.push(argument[j]);
        }
    }
    return arr;

}










task1.addEventListener("click", function(){
    range();
}); //ready
task2.addEventListener("click", function(){
    Sort();
}); // ready
task3.addEventListener("click", function(){
    Matrix();
}); // ready
task4.addEventListener("click", function(){
    union();
}); // ready
task5.addEventListener("click", function(){
    flatten(); 
}); // ready
task6.addEventListener("click", function(){
    alert(deliting_tripls([3, 1, 5, 3, 7, 3, 1, 4, 1]));
    alert(deliting_tripls("Helllo world eo"));
}); // ready