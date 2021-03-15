function TASK2(){

    function compare(a, b){
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }

    function sort(arr, comp = compare){
        for (let i = 0; i < arr.length; i++){
            for (let j = 0; j < arr.length; j++){
                if (comp(arr[i], arr[j]) < 0){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    let result = sort([23, 4, 35, 345, 28, 1, 5, 8, 34, 22]);
    alert(result);
}