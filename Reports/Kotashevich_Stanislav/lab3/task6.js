function TASK6(){
    function tripl(set){
        if (!(set instanceof Array)){
            set = set.split("");
        }
        let map = new Map();
        for (let i = 0; i < set.length; i++){
            if (map.has(set[i])){
                map.set(set[i], map.get(set[i]) + 1);
            } else{
                map.set(set[i], 1);
            }
        }

        let arr = new Array();
        for (let key of map.keys()){
            if (map.get(key) < 3){
                arr.push(key);
            }
        }
        return arr;
    }

    let result1 = tripl([1, 2, 1, 3, 1, 3, 1, 4]);
    let result2 = tripl("mama ramu");
    alert(result1);
    alert(result2);
}