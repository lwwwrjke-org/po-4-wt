
function TASK_1() {
    function range(num1, num2, step = 1) {
        var array = []
        var choice = prompt("Хотите использовать шаг?\n1 - да\n0 - нет");
        if (choice == 1) {
            var step = prompt("Введите шаг");
            step = Number.parseInt(step)   
            if (step < 0)
            {
                for (var i = 0; num1 >= num2; i++) {
                    array[i] = num1
                    num1 += step
                }    
            }
            else {
                for (var i = 0; num1 <= num2; i++) {
                    array[i] = num1
                    num1 += step
                }
            }
        }
        else {
            var temp = num1 
            for (var i = 0; num1 <= num2; i++) {
                array[i] = num1 
                num1 = temp
                num1 += step
                step++
            }
        }
        return array
    }
    var num1 = prompt("первый индекс: ");
    num1 = Number.parseInt(num1)
    var num2 = prompt("второй индекс: ");
    num2 = Number.parseInt(num2)
    prompt(range(num1, num2))
    
}
