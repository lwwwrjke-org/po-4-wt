function lab3_2(){
while(1){

var n = prompt("Введите количество элементов массива: ");
if(isNaN(n)){ alert("Неверные данные"); throw "Error"; }

var B = [];
for(var i = 0; i < n; i++){
	var a = prompt("Введите " + i + " элемент массива:");
	B.push(a);
}

function QuickSort(A){
  if (A.length == 0) return [];
  var a = [], b = [], p = A[0];
  for (var i = 1; i < A.length; i++){ 
    if (A[i] < p) a[a.length] = A[i];
    else b[b.length] = A[i];
  }
  return QuickSort(a).concat(p,QuickSort(b));
}
alert("B=[" + B + "]\n" + "sortB=[" + QuickSort(B) + "]");
}
}