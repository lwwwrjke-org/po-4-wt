function task1() {
    function range(left, right, step = 1) {
        let result = [];
        let default_step = prompt("Со стандартным шагом?\n1-да, 0-нет", 1);
        if (default_step == 0) {
            step = parseInt(prompt("Новый шаг\n шаг = ", 1));
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
            alert("Неверный шаг!");
        }

        return result;
    }

    let left  = prompt("Левая граница:\nleft = ", 1);
    left      = parseInt(left);
    let right = prompt("Правая граница:\nright = ", 1);
    right     = parseInt(right);
    alert(range(left,right));
}