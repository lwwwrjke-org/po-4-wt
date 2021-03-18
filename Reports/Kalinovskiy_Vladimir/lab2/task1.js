function task1 () {
while (true) {
var per1 = Number(prompt('Введите первое число'));
var per2 = Number(prompt('Введите второе число'));

if (Number.isNaN(per1)==true){
    alert('Первый ввод - не число');
    break;
}

if (Number.isNaN(per2)==true){
    alert('Второй ввод - не число');
    break;
}

if (per1>per2){
alert ('Второе число меньше');
}

else if (per1<per2){
    alert ('Первое число меньше');
}

else if (per1==per2){
    alert ('Числа равны');
}

}

alert ('Цикл завершен из-за неправильных данных');
return 0;
}
