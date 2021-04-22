function lab_3_6(){
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
alert(triple_remove([6, 2, 6, 2, 6, 3, 1, 5, 2]));
alert(triple_remove("Heeelo wwoorld lw"));
} 