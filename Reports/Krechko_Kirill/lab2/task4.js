alert("Задача 4");
while(true){

var month = prompt("Введите месяц: ");
var day = prompt("Введите день: ");                     //ввод данных
month--;                                                       //Date-отсчет начинается с 0 месяца

if(month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11){    //месяца по 31 дню
	if (day < 1 || day > 31){
		alert("В этом месяце нет столько дней :)");
		break;
	}
}

if(month == 3 || month == 5 || month == 8 || month == 10){    // месяца по 30 дней
	if (day < 1 || day > 30){
		alert("В этом месяце нет столько дней :)");
		break;
	}
}else{														//февраль
	if (day < 1 || day > 29){
		alert("В этом месяце нет столько дней :)");
		break;
	}
}

var x = new Date(2016, month, day);                            //создание объекта тип Date и установка значений

switch (x.getDay()){                                           //аргумент switch возвращает день недели (0-вс, 1-пн и т.д.)
  case 0:
    alert("в этот день было (будет) воскресенье");
    break;

  case 1:
    alert("в этот день был (будет) понедельник");
    break;

  case 2:
    alert("в этот день был (будет) вторник");
    break;

  case 3:
    alert("в этот день была (будет) среда");
    break;

  case 4:
    alert("в этот день был (будет) четверг");
    break;

  case 5:
    alert("в этот день была (будет) пятница");
    break;

  case 6:
    alert("в этот день была (будет) суббота");
    break;
  
  default:
    alert("проблемы");
    break;
}
}