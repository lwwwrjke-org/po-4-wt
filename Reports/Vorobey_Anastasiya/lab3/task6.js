function triplo (massiv) {
    let values;
    values = Object.values(massiv); //Object.values() возвращает массив значений перечисляемых свойств объекта
    let result = [];

    values.forEach(item => { //forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
        let count = 0;
        for (i = 0; i < values.length; i++) {
            if (item == values[i]) {
                count++; //считаем кол-во каждого элемента
            }
        }
        if (count < 3 && result.indexOf(item) == -1) { //indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет
            result.push (item);
        }
    });
    return result;
}

function main () {
    let arr = [1, 2, 3, 4, 5, 2, 2, 3, 3, 4];
    let string = 'aaaaanbbbbbccccefgdh';
    let dict = { 0: "a", 1: "a", 2: "a", 3: "b", 4: "b"};
  //  let a = triplo(arr);
   // alert(a);
    document.getElementById('info').innerHTML = `<p>Массив без триплов: ${triplo(arr)}<br> Строка без триплов: ${triplo(string)}<br> Словарь без триплов: ${triplo(dict)}`;
}
  
let button = document.querySelector('.button');
button.addEventListener('click', main);
  