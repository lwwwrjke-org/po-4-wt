function range (start,end,step=1) {
    if (step==0){
        console.log ('Шаг не может быть равен нулю');
        throw new Error();
    }
    let array =[start];
    let buf = start;
    while (array[array.length-1]!=end){
        buf+=step
        array.push (buf);
        if (step>0&&buf>end){
            console.log ('Проблемы с шагом');
            throw new Error();
        }
        else if (step<0&&buf<end){
            console.log ('Проблемы с шагом');
            throw new Error();
        }
    }
    return array;
}

function main1 () {
    console.log (range (10,20,2));
    console.log (range (20,-10,-5));
    console.log (range (20,23));
    console.log (range (20,2,2));
    return 0;
}

