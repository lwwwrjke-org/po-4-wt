function range (leftNumber,rightNumber,step){
  if( (leftNumber <= rightNumber && step <=0) || (leftNumber >= rightNumber && step >=0)){
    alert("Некорректный ввод данных! " );
    return 0;
  }


  var array = new Array();


  if (step < 0){
      step =+ step;
      for(leftNumber ; leftNumber >= rightNumber; leftNumber+=step)
      array.push(leftNumber);
    }else {
      for(leftNumber ; leftNumber <= rightNumber; leftNumber+= step)
      array.push(leftNumber);
    }


return array;
}

var array = new Array();

var leftNumber = prompt("Введите начало массива: ");
var rightNumber = prompt("Введите конец массива: ");
var step = prompt("Введите шаг: ");
array = range(Number(leftNumber),Number(rightNumber),Number(step));

console.log(array);
