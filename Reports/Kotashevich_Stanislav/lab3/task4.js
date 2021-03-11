function TASK4(){
    function union(){
        let dict = new Map();
        for (let i = 0; i < arguments.length; i++){
            for (let j = 0; j < arguments[i].length; j++){
                dict.set(arguments[i][j], 0);
            }
        }
        
        let array = new Array();
        for (let keys of dict.keys()){
            array.push(keys);
        }
        return array;
    }

    let arr = union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]);
    alert(arr);
}