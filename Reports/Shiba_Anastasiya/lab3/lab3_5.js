function lab3_5(){
var arr1 = [1, [2,[3,[4]]]];
var arr2 = [1, [2], [3, [[4]]],[5,6]];
function flatten(arr){
	var i = 0;
	while(i < arr.length){
		arr = arr.reduce(function(a,b){
			return a.concat(b);
		}, []);
		i++;
	}
	return arr;
}
alert(flatten(arr1));
alert(flatten(arr2));
}