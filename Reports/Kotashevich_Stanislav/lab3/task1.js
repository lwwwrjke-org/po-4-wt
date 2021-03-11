function TASK1(){
    
    function range(start, end, alp = 1){
        if ((alp == 0) || (start < end && alp < 0) || (start > end && alp > 0)){
            return null;
        }
        let arr = new Array();
        if (alp > 0){
            for(let i=start; i <= end; i += alp){
                arr.push(i);
            }
        }
        else{
            for(let i=start; i >= end; i += alp){
                arr.push(i);
            }
        }
        return arr;
    }

    let arr = range(5, 2);
    alert(arr);
}