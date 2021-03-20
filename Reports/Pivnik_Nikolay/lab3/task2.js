function sort(comparator,array){

//сортировка выбором 
  for(var startIndex = 0; startIndex < array.length -1 ; ++startIndex ){
    var smallestIndex = startIndex;
    for(var secondIndex = startIndex + 1; secondIndex < array.length; ++secondIndex){

      if(array[secondIndex] > array[smallestIndex] && comparator == ">"){
        smallestIndex = secondIndex;
      }else if(array[secondIndex] < array[smallestIndex] && comparator == "<"){
        smallestIndex = secondIndex;
      }
    }
    [array[startIndex], array[smallestIndex]] = [array[smallestIndex], array[startIndex]];
  }

  for(var i =0; i < array.length; i++){
    console.log(array[i]);
  }


}

var array = [5, 2, 4, 4, 6, 1,3,0,-1];
document.write("Массив: " + array);
var comparator = prompt("как хотите отсортировать? (< - возрастание | > - убывание): ");
if(comparator != '<' && comparator != '>'){
  alert("Некорректный ввод данных");
}else{
  sort(comparator,array);
  document.write("<br>"+ "Массив после сортировки: " + array);
}
