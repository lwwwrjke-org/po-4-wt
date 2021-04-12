function task1() {
    function range(left, right, step = 1) {
        let result = [];
        let defstep = prompt("С шагом по умолчанию??\n1-Да, 2-Нет", 1);
        if (defstep == 0) {
            step = parseInt(prompt("Новый шаг\nшаг = ", 1));
        }
        if (step > 0) {
            for (let i = left; i <= right; i += step) {
                result.push(i);
            }
        } else if (step < 0) {
            for (let i = left; i >= right; i += step) {
                result.push(i);
            }
        } else {
            alert("Неправильный шаг!");
        }

        return result;
    }

    let left  = prompt("Левая граница:\nЛевая = ", 1);
    left      = parseInt(left);
    let right = prompt("Правая граница:\nПравая = ", 1);
    right     = parseInt(right);
    alert(range(left,right));
}