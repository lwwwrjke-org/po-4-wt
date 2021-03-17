function lab3_4(){
var arr1 = [3, 9, 4, 13];
var arr2 = [4, 3, 6, 13, 4];
var arr3 = [10, 6, 101];
function union(array1, array2, array3){
var arr = arr1.concat(arr2).concat(arr3);
alert(arr);
var union = [...new Set([...array1, ...array2, ...array3])];
alert(union);
}
union(arr1, arr2, arr3);
}