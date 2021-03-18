function task4()
{
	while(true) {
	      const YEAR = 2016
	      let month  = prompt('Введите месяц ( 1 - 12 )');
	      let day;
	      month = Number(month);
	      if (month < 1 || month > 12) 
	      {
	          alert("Где-то ошибка");
	          break;
	      }

	      if (month == 2) 
	      {
	        day = prompt('Введите день( 1-29 )');
	        day = Number(day);
	        if (month == 2 && day > 29) 
	        {
	            alert("Где-то ошибка");
	            break;
	        }
	      } 
	      else
	       {
	        day = prompt('Введите день (1-31)');
	        day = Number(day);
	        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8
	          || month == 10 || month == 12) 
	          {
	          if (day < 1 || day > 31) 
	          {
	              alert("Где-то ошибка");
	              break;
	          }
	        } else
	         {
	          if (day < 1 || day > 30) 
	          {
	            alert("Где-то ошибка");
	            break;
	          }
	        }
	      }

	      if ((month || day) === null) 
	      {
	          alert("Где-то ошибка");
	          break;
	      }

	      let date = new Date(YEAR, month-1, day-1);

	      switch (date.getDay()) 
	      {
	        case 0:
	          alert('Понедельник');
	          break;
	        case 1:
	          alert('Вторник');
	          break;
	        case 2:
	          alert('Среда');
	          break;
	        case 3:
	          alert('Четверг');
	          break;
	        case 4:
	          alert('Пятница');
	          break;
	        case 5:
	          alert('Суббота');
	          break;
	        case 6:
	          alert('Воскресенье');
	          break;
	        default:
	          alert('Где-то ошибка');
	      }
	  }   
}