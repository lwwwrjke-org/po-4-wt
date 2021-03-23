function task_5(){

    function flatten(array){ //функцию flatten(), которая в случае, если массив обладает
        //уровнями вложенности, приведёт его к элементарному виду 
        let result = []; // массив, в который мы будем помещать наш мааасив без вложенности
        (function flat(array){ 
            for (let i = 0; i < array.length; i++) {
                if (array[i] instanceof Array) { //проверка на то, или принадлежит i-тый элемент к классу array
                  flat(array[i]); //если да - то устраняем вложенность
                } else { 
                  result.push(array[i]);// иначе добавляем этот элемент в конец массива result
                }
              }
            }(array));
        return result;
    }
    alert("Вложенный массив:[1, [2], [3, [4]]]");
    let result = flatten([1, [2], [3, [4]]]);
    alert("Результат устранения вложенности:"+result);
}