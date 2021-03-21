    function getVars() {
       let first, second, step;
       first = document.getElementById('first').value; //получем значения с полей
       second = document.getElementById('second').value;
       step = document.getElementById('step').value;

       if (first == "" || second == "") {
           return document.getElementById('massiv').innerHTML = `Не все данные введены!`;
       }
       if (step != "") { //если поле заполнено
        range(parseInt(first), parseInt(second), parseInt(step)); //Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления
       } else { //если шаг пустой и по дефолту = 1
        range(parseInt(first), parseInt(second));
       }
    };

    function range(first, second, step = 1) { 
      let arr = [];
      if (first == second) {
        return document.getElementById('massiv').innerHTML = `Начальное и конечное значения совпадают, шаг не имеет значения. Массив из одного числа: ${first}`;
      }
      if (step > 0 && first > second) { //обрабатываем корявый ввод
         return document.getElementById('massiv').innerHTML = `Начальное число не может быть больше конечного при положительном шаге!`;
      } else if (step < 0 && first < second) {
            return document.getElementById('massiv').innerHTML = `Начальное число не может быть меньше конечного при отрицательном шаге!`;
        } else { //и если все ок, то обрабатываем данные
            for (let i = first; step < 0 ? (i >= second) : (i <= second); i = i + step) { //если шаг меньше нуля, то выполняем первую скобку, иначе вторую
                 arr.push(i);
            }
          }
          document.getElementById('massiv').innerHTML = `Массив от ${first} до ${second} при шаге ${step} ----> ${arr}`; //передаем в хтмл данные
    };
  
    let button = document.querySelector('.button');
    button.addEventListener('click', getVars);
  