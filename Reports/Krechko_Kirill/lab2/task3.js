alert("Задача 3");
var a = 0;
var b = 1;
var res = 0;

var n = 0;

while(true){
	var i = prompt("Введите № числа Фибоначчи:");
	i--; 											            //отчет ведем с нулевого элемента
	if (isNaN(i) || i < 0){
		alert("Некорректный ввод данных! Попробуйте ещё!");     //проверка i      
	}
	else break; 
}

		while(n <= i){												
			res = a;											//нахождение i-го члена послед-и
			a = b;
			b += res;
			n++;
		}

alert((i+1) + "-й член последовательности равен: " + res);


