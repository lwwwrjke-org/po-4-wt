while (true) {
  var month = prompt ("Введите месяц: ");
  var day = prompt ("Введите день: ");
  month--; //Date начинается с 0-го месяца 
// проверка на корректность ввода
if (month >= 1 && month <= 12) { 
  if(  month == 4 || month == 6  || month == 9 || month == 11){    //месяцы, в которых 30 день
    if ( day < 1 || day > 30 ){
      alert("В этом месяце нет столько дней! Проверьте корректность ввода, пожалуйста!");
      break;
    }
  }
  
  if(month == 1 || month == 3 || month == 5  || month == 7 || month == 8 || month == 10 || month == 12){    // месяцы, в которых 31 дней
    if ( day < 1 || day > 31 ){
      alert("В этом месяце нет столько дней! Проверьте корректность ввода, пожалуйста!");
      break;
    }
  }	
  if (month == 2){							//февраль
      if (day < 1 || day > 29 ){
        alert("В этом месяце нет столько дней! Проверьте корректность ввода, пожалуйста!");
        break;
      }
    }
  
  
      var date = new Date(2016, month, day);

    switch (date.getDay()) {
      case 0:
        alert('Воскресенье');
        break;
      case 1:
        alert('Понедельник');
        break;
      case 2:
        alert('Вторник');
        break;
      case 3:
        alert('Среда');
        break;
      case 4:
        alert('Четверг');
        break;
      case 5:
        alert('Пятница');
        break;
      case 6:
        alert('Суббота');
        break;
      default:
        alert('Неверная дата');
    }
  } else {
    alert('Неверная дата');
  }
  };
  button.addEventListener('click', get);

