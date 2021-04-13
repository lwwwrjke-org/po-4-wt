function union(array){

temp_arr = new Array(array.length); 
var temp = 0;

//запись в одномерный массив
for(let i = 0; i < array.length; i++){					
	for(let j = 0; j < array[i].length; j++){
		temp_arr[temp] = array[i][j];
		temp++;
	}
}

temp = 0;
result = new Array();

for(let i = 0; i < temp_arr.length; i++){
	for(var j = 0; j < result.length; j++){
		if(result[j] == temp_arr[i]){
			temp++;
		}
	}
	if(temp == 0){
		result.push(temp_arr[i]);
	}
	temp = 0;
}

return result;
}

let array = [[1, 2, 2, 3], [101, 2, 1, 10], [2, 1]];
alert("Исходный массив\n" + array);

alert("Результат\n" + union(array));

