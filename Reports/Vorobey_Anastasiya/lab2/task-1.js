    let x, y; //создание переменных

    let enterNum = () => { //функции-стрелки
      while (1) {
        x = +prompt('Введите первое число:', 0);
        if (!Number.isInteger(x)) { //проверка на число
          alert("Первый ввод - не число.");
          return;
        }
  
        y = +prompt('Введите второе число:', 0);
        if (!Number.isInteger(y)) {
          alert("Второй ввод - не число.");
          return;
        }
        sravnenie(x, y);
        break;
      }
    };
  
    let sravnenie = (x, y) => {
      if (x < y) {
        alert(`Первое число ${x} меньше второго числа ${y}`); //для работы с переменными обратные кавычки
      } else if (x > y) {
        alert(`Второе число ${y} меньше первого числа ${x}`);
      } else {
        alert(`Числа ${x} и ${y} равны`);
      }
    };
  
    enterNum();
