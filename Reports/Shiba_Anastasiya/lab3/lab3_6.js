function lab3_6(){
function triple_remove(argument){
	var arr = [];
	var del = [];
	if (!(argument instanceof Array)) {
        argument = argument.split('');
    }
	for (var i of argument) {
        del[i] = (del[i] || 0) + 1;
    }
	for (var j in argument) {
        if (del[argument[j]] < 3) {
            arr.push(argument[j]);
        }
    }
    return arr;
}
alert(triple_remove([3, 1, 5, 3, 7, 3, 1, 4, 1]));
alert(triple_remove("Helllo world eo"));
}