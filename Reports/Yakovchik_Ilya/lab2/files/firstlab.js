const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');
const task4 = document.querySelector('#task4');


function comparison(){

    while(true){
        let fnumber = prompt("Enter first number: ");
        if (isNaN(fnumber)){
            alert("Первый ввод не число");
            break;
        }
        fnumber = Number(fnumber);
        let secnumber = prompt("Enter second number: ");
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
        let floors = prompt("Введите количество этажей от 1 до 25: ");
        if (floors < 1 || floors > 25)
        {
            alert("Неверное количество этажей,нужно от 1 до 25:");
            break;                                                                                                                               
        }
        floors = Number(floors);

        let entrances = prompt("Введите количество подъездов от 1 до 10: ");
        if(entrances < 1 || entrances > 10)
        {
            alert("Неверное количество подъездов,нужно от 1 до 10:");
            break;
        }
        entrances = Number(entrances);
        
        let Flats = prompt("Введите количество квартир на этаже: ");
        if (Flats < 1 || Flats > 20){
            alert("Неверное количество квартир,нужно от 1 до 20:");
            break;
        }
        Flats = Number(Flats);

        let allflats = Flats * floors * entrances;
        let NeedFlat = prompt("Введите номер нужной квартиры от 1 до  " + allflats); 
        if(NeedFlat < 1 || NeedFlat > allflats){
            alert("Неверное количество квартир! ");
            break;
        }
        NeedFlat = Number(NeedFlat);

        if(NeedFlat <= allflats || NeedFlat > 0){
            let FindFlat = NeedFlat / Flats / floors;
            FindFlat = Math.ceil(FindFlat);
            alert(`Ваша квартира находидся на ${FindFlat} этаже`);
        }else {
            alert("Такой квартиры не существует");
            return;
        }


    }
}


function calendar(){
    while(true){
        let month = prompt("Введите номер месяца: ");
        month = Number(month);
        if(month < 1 || month > 12 || isNaN(month)){
            alert("Некорректные данные! ");
            break;
        }
        let date = prompt("Введите число месяца: ");
        date = Number(date);
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
        let n = prompt("Введите n: ", 0);
        n = Number(n);
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