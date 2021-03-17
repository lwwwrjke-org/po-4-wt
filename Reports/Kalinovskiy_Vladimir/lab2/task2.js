function task2 (){
var NumberOfFloors = Number(prompt('Введите число этажей'));
var NumberOfEntrances = Number(prompt('Введите число подъездов'));
var NumberOfApt = Number(prompt('Введите число квартир на этаже'));
var AptNumber = Number(prompt('Введите квартиру'));
if (NumberOfFloors>=1 && NumberOfFloors<=25 && NumberOfEntrances>=1 && NumberOfEntrances<=10 && NumberOfApt>=1 && NumberOfApt<=20 && AptNumber<=NumberOfFloors*NumberOfEntrances*NumberOfApt && AptNumber>=1){
    alert ('Подъезд:'+ Math.ceil((AptNumber/NumberOfApt)/NumberOfFloors))
}
else {
    alert ('Неверные данные!')
}
return 0;
}
