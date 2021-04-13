function task6(){
    function tripl(arr){
        var new_arr = []
        for(let i = 0; i < arr.length; i++){
            var count = 0
            for(let j = 0; j < arr.length; j++){
                if(arr[i] == arr[j]){
                    count++
                }
            }
            if(count >= 3){
                count = 0
                continue
            } else {
                if(new_arr.length == 0){
                    new_arr.push(arr[i])
                }
                for(let j = 0; j < new_arr.length; j++){
                    if(arr[i] == new_arr[j]){
                        break
                    }
                    if(j == new_arr.length - 1){
                        new_arr.push(arr[i])
                    }
                }
            }
        }
        
        return new_arr
    }

    var arr = [1, 2, 1, 3, 1, 3, 1, 4]
    alert(tripl(arr))    
}

document.getElementById('task6').onclick = task6