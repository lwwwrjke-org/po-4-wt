alert("Задача 3");
var a = 0;
var b = 1;
var sum = 0;
var n = 1;

while(true){

	var i = prompt("Введите № числа Фибоначчи:");
	if (isNaN(i)){
		alert("Некорректный ввод данных! Попробуйте ещё!");          //проверка i      
	} 

	else { 
		while(n < i){												
			sum = a + b;											//нахождение i-го члена послед-и
			a = b;
			b = sum;
			n++;
		}

		if (i == 0){												//0-ой элем послед равен нулю
			alert("result= " + 0);
			break;
		} else {
			alert("result= " + (b+a));											
			break;
		}
	}
}