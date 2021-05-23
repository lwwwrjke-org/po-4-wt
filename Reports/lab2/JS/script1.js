"use strict"
function firstScript(){
    while (1) {
        let number1 = prompt("Введите первое число", null)
        let number2 = prompt("Введите второе число", null)

        number1 = Number(number1)
        number2 = Number(number2)

        if (isNaN(number1)) {
            alert("Первый ввод - не число")
            break
        }

        if (isNaN(number2)) {
            alert("Второй ввод - не число")
            break
        }

        if (number1 < number2) {
            alert("Певое число меньше")
        } else if (number1 === number2) {
            alert("Числа равны")
        } else if (number1 > number2){
            alert("Первое число больше")
        }
    }
}