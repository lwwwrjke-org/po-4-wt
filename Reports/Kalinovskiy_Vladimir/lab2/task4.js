month=Number(prompt('Введите месяц'));
day=Number(prompt('Введите день'));
month--;
if (Number.isNaN(month)==false && Number.isNaN(day)==false && month>=0&&month<=11){ 
    if ((month==0||month==2||month==4||month==6||month==7||month==9||month==11) && (day<=0 || day>31)){
        alert ('Неверные данные!');
    }    
    else if (month==1 && (day<=0 || day>29)){
        alert ('Неверные данные!');
    }
    
    else if ((month==3||month==5||month==8||month==10) && (day<=0 || day>30)){
        alert ('Неверные данные!');
    }

    else { 
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
}

else{
    alert ('Неверные данные!');
}
