var fib1 = 0;
var fib2 = 1;
var fib_sum = 0;
var n = 1;

while(true){

	var k = prompt("Введите № числа Фибоначчи:");
	if (isNaN(k)){
		alert("Некорректный ввод данных! Попробуйте ещё!");          //проверка i      
	} 

	else { 
		while(n < k){												
			fib_sum = fib1 + fib2;											//нахождение i-го члена послед-и
			fib1 = fib2;
			fib2 = fib_sum;
			n++;
		}

		if (k == 0){												//0-ой элем послед равен нулю
			alert("result= " + 0);
			break;
		} else {
			alert("result= " + (fib2+fib1));											
			break;
		}
	}
} 

