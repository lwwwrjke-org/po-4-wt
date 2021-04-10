function range(start, finish, step = 0){

	if((start > finish && step > 0)||
	   (start < finish && step < 0)){
		alert("Некорректный ввод данных");
		return;
	}

	if(start > finish && step == 0)
		step = -1;
	if(start < finish && step == 0)
		step = 1;

	var arr = [];
	var i = 0;
	if(step > 0){
		while (finish >= start){
			arr[i] = start;
			start += step;
			i++;
		}
	}else{
		while (finish <= start){
			arr[i] = start;
			start += step;
			i++;
		}
	}

	return arr;
}


let start = Number(prompt("Введите начало диапозона: "));       
	if ( isNaN(start) ) 								
		alert("Первый ввод - не число!");

let finish = Number(prompt("Введите конец диапозона: "));		
	if ( isNaN(finish) )                             
		alert("Второй ввод - не число!");

let step = Number(prompt("Введите, если конечно же хотите, шаг: "));		
	if ( isNaN(step) )                              
		alert("Третий ввод - не число!");

var arr = range(start, finish, step);
alert(arr);
