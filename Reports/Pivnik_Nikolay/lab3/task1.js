function range (leftNumber,rightNumber,step){
  if( leftNumber >= rightNumber){
    alert("Некорректный ввод данных! (левое значение больше правого!)" );
    return 0;
  }

  if( step == 0){
    alert("Некорректный ввод данных! (шаг не может быть равен нулю)" );
    return 0;
  }

  var array = new Array();


  if (step > 0){
      for(leftNumber ; leftNumber <= rightNumber; leftNumber+=step)
      array.push(leftNumber);
    }else {
      for(rightNumber ; rightNumber >= leftNumber; rightNumber+= step)
      array.push(rightNumber);
    }


return array;
}

var array = new Array();

var leftNumber = prompt("Введите начало массива: ");
var rightNumber = prompt("Введите конец массива: ");
var step = prompt("Введите шаг: ");
array = range(Number(leftNumber),Number(rightNumber),Number(step));

console.log(array);
