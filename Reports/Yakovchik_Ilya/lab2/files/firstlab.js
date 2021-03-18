const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');
const task4 = document.querySelector('#task4');


function comparison(){

    while(true){
        var fnumber = prompt("Enter first number: ");
        if (isNaN(fnumber)){
            alert("Первый ввод не число");
            break;
        }
        fnumber = Number(fnumber);
        var secnumber = prompt("Enter second number: ");
        if (isNaN(secnumber)){
            alert("Второй ввод не число");
            break;
        }
        secnumber = Number(secnumber);
        if(fnumber == secnumber){
            alert("Числа равны");
            break;
        }
        else if(fnumber > secnumber){
            alert("Первое число больше");
            break;
        }
        else {
            alert("Второе число больше"); 
            break;
        }
    }
}


function house(){

    while(true){
        var floors = prompt("Введите количество этажей от 1 до 25: ");
        if (floors < 1 || floors > 25)
        {
            alert("Неверное количество этажей,нужно от 1 до 25:");
            break;                                                                                                                               
        }

        var entrances = prompt("Введите количество подъездов от 1 до 10: ");
        if(entrances < 1 || entrances > 10)
        {
            alert("Неверное количество подъездов,нужно от 1 до 10:");
            break;
        }

        var flats = prompt("Введите количество квартир от 1 до 20: ");
        if (flats < 1 || flats > 20){
            alert("Неверное количество квартир,нужно от 1 до 20:");
            break;
        }
        
        var FlatsOnTheFloor = prompt("Введите количество квартир на этаже: ");
        if (flats < 1 || flats > 20){
            alert("Неверное количество квартир,нужно от 1 до 20:");
            break;
        }

        var FindFlat = prompt("Введите номер квартиры которую хотите найти: ");

        var result = FindFlat / floors / FlatsOnTheFloor;
        result = Math.ceil(result);

        if(result <= entrances){
            alert(`Квартира ${FindFlat} находится на ${result} этаже` );
        }else {
            alert(`Квартира ${FindFlat} находится на этаже ${result}\n` 
            + `Но этаж: ${result} не существует`);
        }

    }
}


function calendar(){
    while(true){
        var month = prompt("Введите номер месяца: ");
        if(month < 1 || month > 12 || isNaN(month)){
            alert("Некорректные данные! ");
            break;
        }
        var date = prompt("Введите число месяца: ");
        if(date < 1 || date > 31 || isNaN(date)){
            alert("Некорректные данные! ");
            break;
        }

        if(month == 2 && date > 29){
            alert("Некорректные данные! ");
            break;            
        }

        if(month == 4 || month == 6 || month == 9 || month == 11){
            if(date > 30){
                alert("Некорректные данные! ");
                break;
            }
        }
        
        alert(["Воскресенье", "Понедельник", "Второник", "Среда", "Четверг", "Пятница", "Суббота"][new Date(2016, month - 1, date).getDay()]);
        alert(date + '' + month + '' + 2016 + '\n');
    }
}


function fib(){

    function Fibbonachi(n) {
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1
        }
        return Fibbonachi(n - 1) + Fibbonachi(n - 2);
    }

    while(true) {
        n = prompt("Введите n: ", 0);
        alert("Результат = " + Fibbonachi(n));
    }
}


task1.addEventListener("click", function(){
    comparison()
});
task2.addEventListener("click", function(){
    house();
});
task3.addEventListener("click", function(){
    fib();
});
task4.addEventListener("click", function(){
    calendar();
});