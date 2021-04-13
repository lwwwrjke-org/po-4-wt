alert("Сортировка пузырьком");

function compator(a, b){
	return a > b;
}


var arr = [2, 5, 21, 1, 0, 8];
alert("Исходный массив: " + arr);

var temp;
for (var i = 0; i < arr.length; i++) {
	for(j = arr.length - 1; j > i; j--){
		if (compator(arr[j-1], arr[j])){
			temp = arr[j-1];
			arr[j-1] = arr[j];
			arr[j] = temp;
		}
	}
}

alert("Отсортированный массив: " + arr);

	