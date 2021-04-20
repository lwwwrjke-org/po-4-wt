function task1(){
    function range(start, end, step) {
        let range = []
        if (step > 0) {
          for (let i = start; i <= end; i += step){
            range.push(i)
          }   
        } else {
          for (let i = start; i >= end; i += step){
            range.push(i)
          }
        }
        return range
    }

    let start, end, step
    start = prompt("Введите начало диапазона: ")
    start = Number(start)
    if(isNaN(start)){
        alert("Ошибка!")
        return 0
    }

    end = prompt("Введите конец диапазона: ")
    end = Number(end)
    if(isNaN(end)){
        alert("Ошибка!")
        return 0
    }

    step = prompt("Введите шаг: ")
    step = Number(step)
    if(isNaN(step) || step == 0){
        alert("Ошибка!")
        return 0
    }

    if((start > end && step > 0) || (start < end && step < 0)){
      alert("Ошибка!")
      return 0
    }

    alert("Данные:\nНачальный диапазон - " + start + "\nКонечный диапазон - " + end + "\nШаг - " + step + 
    "\nВсе числа диапазона [" + range(start, end, step) + "]")
}

document.getElementById('task1').onclick = task1