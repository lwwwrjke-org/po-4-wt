month=Number(prompt('Введите месяц'));
day=Number(prompt('Введите день'));
month--;

if (Number.isNaN(month)==false && Number.isNaN(day)==false ){
    var data = new Date (2016,month,day);
    switch (data.getDay()){
        case 0:
            alert ('Воскресенье');
            break;
         case 1:
             alert ('Понедельник');
             break;
        case 2:
             alert ('Вторник');
             break; 
        case 3:
            alert ('Среда');
            break;  
        case 4:
            alert ('Четверг');
            break; 
        case 5:
            alert ('Пятница');
            break; 
        case 6:
            alert ('Суббота');
            break;   
        default:
            alert ('Неверные данные!');
    }

}

else{
    alert ('Неверные данные!');
}
