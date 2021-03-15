function task1(){
  let x, y
  let answer
  
  for(;;) {
    x = prompt('Введите первое число')
    x = Number(x)
    if (!Number.isInteger(x)) {
      alert("первое число – не число")
       break
    }
    y = prompt('Введите второе число')
    y = Number(y)
    if (!Number.isInteger(y)) {
      alert("второе число – не число")
      break
    }
    if (x < y) {
      alert("первое число меньше второго")
    } else if (x > y) {
      alert("второе число меньше первого")
    } else {
      alert("введённые числа равны")
    }
    answer = prompt('Хотите продолжить? (1 - да, 0 - нет)')
    answer = Number(answer)
      if (answer == 0 || answer != 1) {
        break
      }
  }
}

document.getElementById('task1').onclick = task1;