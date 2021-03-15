function task2()
{
	while(true){

		var entrance = prompt("Введите число подъездов (от 1 до 10): ");
		var floor = prompt("Введите количество этажей (от 1 до 25): ");								  
		var apartment = prompt("Введите число квартир на лестничной площадке (от 1 до 20): ");

		if (entrance >= 1 && entrance <= 10 && floor >= 1 && floor <= 25 && apartment >= 1 && apartment <= 20){			                   				
			var n = prompt("Введите номер квартиры");											 		

			if ((entrance*floor*apartment) < n || n < 0){
				alert("Где-то ошибка");                 
				continue;
			}

			alert("квартира в подъезде № " + Math.ceil(n/(floor*apartment)));				  
			break;                                                            
		}                                                                     
		else {
			alert("Где-то ошибка");
			break;
		}
	}
}