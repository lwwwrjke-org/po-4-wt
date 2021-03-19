function lab_2_1(){
    while (1){
        var num_1 = prompt("Введите 1-ое число");
        var one = Number(num_1);

        if (isNaN(one)){
            alert("Первый ввод - не число");
            break;
        }

        var num_2 = prompt("Введите 2-ое число");
        var two = Number(num_2);

        if (isNaN(two)){
            alert("Второй ввод - не число");
            break;
        }

        if (one == two){
            alert("Числа равны");
        } else if (one < two){
            alert("Первое число меньше");
        } else if (one > two){
            alert("Второе число меньше");
        };
    }
} 