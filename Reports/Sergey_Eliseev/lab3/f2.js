    function bubble(arr){
        for ( let i = 0 ; i < arr.length - 1 ; i++){
            for ( let j = 0 ; j < arr.length - i - 1 ; j++){
                if (arr[j] > arr[j+1]){
                    let swap = arr[j] ; 
                    arr[j] = arr[j+1];
                    arr[j+1] = swap ;
                }
            }
        }
        return arr;
    }
    alert(bubble([17 , 0 , -1 ,4]));
