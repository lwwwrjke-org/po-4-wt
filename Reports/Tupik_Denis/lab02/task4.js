function task4(){
    let month, day, year=2016;
    month = prompt('Введите номер месяца')
    month = Number(month)
    day = prompt('Введите число в этом месяце')
    day = Number(day)
  
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        alert("Ошибка")
        return
    }
    if((month == 4 || month == 6 || month == 9 || month == 11) && day == 31){
        alert("Ошибка")
        return
    }
    if(month == 2 && (day == 30 || day == 29) && (year % 4 != 0 || year % 100 == 0)){
        alert("Ошибка")
        return
    }
  
    let date = new Date(year, month - 1, day)
  
    switch (date.getDay()) {
        case 0:
            alert('Воскресенье')
            break
        case 1:
            alert('Понедельник')
            break
        case 2:
            alert('Вторник')
            break
        case 3:
            alert('Среда')
            break
        case 4:
            alert('Четверг')
            break
        case 5:
            alert('Пятница')
            break;
        case 6:
            alert('Суббота')
            break
        default:
            alert('Неверная дата')
      }
}

document.getElementById('task4').onclick = task4;