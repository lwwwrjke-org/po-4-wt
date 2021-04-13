function tripple(array){

	result = new Array();
	for (var i = 0; i < array.length; i++) {
		result[i] = array[i];
	}


	res = new Array();
	var temp = 0;
	for (var i = 0; i < result.length; i++) {
		for(var j = 0; j <result.length; j++){
			if(result[i] == result[j])
				temp++;
		}
		if(temp < 3 )
			res.push(result[i]);
		temp = 0;
	}

	return res;
}

var a = [1, 2, 1, 3, 1, 3, 1, 4]; // a = [2, 3, 4]
var b = "mama ramu"; // b = [" ", "r", "u"];

console.log(tripple(a));
console.log(tripple(b));