function union (array1,array2,array3){
var unionArray = new Array();
unionArray = buildUnionArray(array1,unionArray);
unionArray = buildUnionArray(array2,unionArray);
unionArray = buildUnionArray(array3,unionArray);

return unionArray;

}

function buildUnionArray(array, unionArray){
  var temp = 0;
  for (var i = 0; i < array.length;i++){
    for(var j =0; j <unionArray.length;j++){
      if(unionArray[j] == array[i]){
        temp++;
      }
    }
    if(temp == 0){
      unionArray.push(array[i]);
    }
    temp = 0;
  }

  return unionArray;

}

function main(){
var array1 = new Array(1,2,2,3);
console.log("Первый массив: ");
console.log(array1);

var array2 = new Array(101,2,1,10);
console.log("Второй массив: ");
console.log(array2);

var array3 = new Array(2,1);
console.log("Третий массив: ");
console.log(array3);

var unionArray = new Array();
unionArray = union(array1,array2,array3);
console.log("Массив уникальных чисел: ");
console.log(unionArray);
}

main();
