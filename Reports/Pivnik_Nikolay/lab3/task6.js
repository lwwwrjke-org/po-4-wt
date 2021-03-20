function deletingThreeAndMore(array,key){
  console.log(array);
  var unionArray = new Array();
  var temp = 0;
  for (var i = 0; i < array.length;i++){ //делаю массив уникальных элементов
    for(var j =0; j < unionArray.length;j++){
      if(unionArray[j] == array[i]){
        temp++;
      }
    }
    if(temp <= 0){
      unionArray.push(array[i]);
    }
    temp = 0;
  }

  temp =0;
  for(var i = 0; i<unionArray.length;i++){ //нахожу совпад. 3 раз и удаляю
    for(var j =0; j < array.length;j++ ){
      if(array[j] == unionArray[i]){
        temp++;
      }
    }

    if(temp >= key){
      unionArray.splice(i,1);
      i--;
    }
    temp = 0;
  }


  return unionArray;

}

function main (){
var array = new Array(1,2,1,3,1,3,1,4);
array = deletingThreeAndMore(array,3);
console.log(array);

array = deletingThreeAndMore("mama ramu",3);
console.log(array);

}

main();
