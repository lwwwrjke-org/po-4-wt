function task3(){
    function fib(n){
        if(n <= 1){
            return n;
        }else{
            return fib(n - 1) + fib(n - 2);
        }
    }
    let i
    i = prompt('Введите порядковый номер')
    i = Number(i)
    if(!Number.isInteger(i)){
        alert("Данное число - не число")
        return
    }
    if(i < 1){
        alert("Это не порядковое число")
        return
    }
    alert(`Число на этой позиции равно ${fib(i)}`)
}

document.getElementById('task3').onclick = task3;