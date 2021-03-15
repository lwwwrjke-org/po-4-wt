// Неделя в JavaScript начинается с воскресенья, так что результат будет числом от 0(воскресенье) до 6(суббота).
    let button = document.querySelector('.button');
    const YEAR = 2021;
    let month, day, date;
  
    let get = () => {
      month = prompt('Введите номер месяца: ');
      day = prompt('Введите число в этом месяце: ');
      if (month >= 1 && month <= 12) { 
      if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        if ( day < 1 || day > 31 ) {
        alert ('В этом месяце 31 день.');
        ExtensionScriptApis;
        }
      }
       
         if (month == 4 || month == 6 || month == 9 || month == 11) {
           if (day < 1 || day > 30) {
            alert ('В этом месяце 30 дней.');
            ExtensionScriptApis;
           }
          } 
             if (month == 2 && ( day < 1 || day > 28)) {
                alert ('В феврале 28 дней.');
                ExtensionScriptApis;
             } 

      date = new Date(YEAR, month - 1, day);
      switch (date.getDay()) { //функция гетдэй возвращает значение от 0 до 6
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
