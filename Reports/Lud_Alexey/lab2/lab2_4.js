function lab2_4(){
while(1){
  var mounth = prompt("Введите номер месяца(1-12):");
  if(mounth < 1 || mounth > 12 || isNaN(mounth)){
    alert("Неверные данные");
    break;
  }
  var date = prompt("Введите число(1-31):");
  if(date < 1 || date > 31 || isNaN(date)){
    alert("Неверные данные");
    break;
  }
  if(mounth == 2 && date > 29){
    alert("Неверные данные");
    break;
  }
  if(mounth == 4 || mounth == 6 || mounth == 9 || mounth == 11){
    if(date > 30){
      alert("Неверные данные");
      break;
    }
  }
  alert(["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"][new Date(2016, mounth-1, date).getDay()]);
  alert(date+' '+ mounth +' '+ 2016 +'\n');
}
}