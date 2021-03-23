function task_6(){

    function tripl(args){

        if (!(args instanceof Array)){ //проверка на то или args является массивом
            args = args.split(""); //разбиваем исходный массив с поомощью разделителя ""
        }
        let repeats = new Map(); //создаем объект для хранения пар ключ-значение (ключ - это кол-во повторов данного элемента)
        for (let i = 0; i < args.length; i++){ //проходим по массиву
            if (repeats.has(args[i])){ //или есть элемент с соответствующим ключом в repeats
                repeats.set(args[i], repeats.get(args[i]) + 1); //если есть, то помещаем этот уникальный элемент в repeats и его кол-во повторений
            } else{
                repeats.set(args[i], 1); 
            }
        }

        let result = new Array();
        for (let key of repeats.keys()){ //проходимся по кол-ву повторений каждого элемента
            if (repeats.get(key) < 3){ //если оно меньше чем 3, то помещаем этот элемент в result
                result.push(key);
            }
        }
        return (`Исходные массив/объект: [`+ args +`]`+`\nНовый массив/объект: [`+ result +`]`);
    }

    let result1 = tripl([1, 2, 1, 3, 1, 3, 1, 4]);
    let result2 = tripl("mama ramu");
    alert(result1);
    alert(result2);
}