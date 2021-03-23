function task_4(){
    var array_1 = [1, 2, 2, 3];
    var array_2 = [101, 2, 1, 10];
    var array_3 = [2, 1];
    function union(){
        //присоединяем к первому массиву второй массив, а затем к этому объединению присоединяем третий массив
        var array1_2 = array_1.concat(array_2);
        var array1_2_3 = array1_2.concat(array_3);
        var obj = {}; //создаем объект

    for (let i = 0; i < array1_2_3.length; i++) { //с помощью ключей делаем так что в массиве будут только уникальные элементы, без повтора!!
        let item = array1_2_3[i]; // записываем в переменную элементы объединенного массива
        obj[item] = true; // [в obj находятся ключи элементов], проверка на уникальность
      }
      return Object.keys(obj); //возвращаем массив ключей(свойств)
    }
    alert("Первый массив:"+array_1);
    alert("Второй массив:"+array_2);
    alert("Третий массив:"+array_3);
    let arr = union(array_1, array_2, array_3);
    alert("Объединенный массив:"+arr);
}