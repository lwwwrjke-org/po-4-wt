function TASK_4() {
    function union(...arrays) {
        var dictionary = [],
            key = {};//словарь

        for (var i = 0; i < arrays.length; i++) {
            dictionary = dictionary.concat(arrays[i]);
        }
        //Создаём словарь, в словаре есть ключи и значения
        //Плюсы словаря в том что в нём не может быть два одинаковых ключа
        //поэтому если у нас в массивах 2,2,2 мы создадим только один ключ 2 и туда запишем true
        for (let i = 0; i < dictionary.length; i++) {
            let item = dictionary[i];
            key[item] = true;
        }
        return Object.keys(key);
    }
    alert(union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]));     
}


