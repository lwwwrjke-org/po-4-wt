function union () {
    let arr3 = [];
    let checked = false;
    for (i=0;i<arguments.length;i++){
        for (j=0;j<arguments[i].length;j++){
            for (k=0; k<arr3.length;k++){
                if (arr3[k]==arguments [i][j]){
                    checked = true;
                    break;
                }
                else if (arr3[k]!=arguments [i][j]){
                    checked = false;
                }
            }
            if (checked == false){
                arr3.push(arguments[i][j]);
            }
        }
    }
    return arr3;
}

function main4 () {
    let arr1 = [7,10,20,6,7];
    let arr2 = [11,28,10,29];
    let arr3 = [0,-9,25,0];
    let arr4 = [567,-3,8,10,29,5,1,1,1,1,1];
    console.log (union (arr1,arr2,arr3,arr4));
    return 0;
}