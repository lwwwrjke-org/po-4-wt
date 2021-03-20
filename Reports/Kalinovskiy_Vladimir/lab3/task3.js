function creatematrix (rows, columns) {
if (rows==0||columns==0){
    console.log ('Строки/стобцы не могут быть равны нулю');
    throw new Error();
}
else {
    let matrix = [];
    for (let i=0;i<rows;i++){
        matrix [i]=[];
        for (let j=0; j<columns; j++){
            matrix [i] [j] = Math.floor(Math.random() * 100);
        }
    }
    return matrix;
}
}

function sum (a,b){
    
    if (a.length!=b.length || a[0].length!=b[0].length){
        console.log ("Матрицы не равны, суммирование невозможно.");
    }

    else {
        let c=[]
        for (let i=0;i<a.length;i++){
            c [i]=[];
            for (let j=0; j<a[0].length; j++){
            c [i] [j] = a[i][j]+b[i][j];
            }
    }
    return c;
}
}

function main3 (){
 let MatrixOne = creatematrix (3,2);
 let MatrixTwo = creatematrix (3,2);
 console.log (MatrixOne, MatrixTwo);
 console.log (sum (MatrixOne, MatrixTwo));
 return 0;
}

