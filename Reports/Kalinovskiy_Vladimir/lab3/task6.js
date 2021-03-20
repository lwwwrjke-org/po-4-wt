function deletetrpl (obj) {
    let values = Object.values(obj);
    console.log (values);
    let finale = [];

    values.forEach(element => {
        let counter = 0;
        for (i=0;i<values.length;i++){
            if (element == values[i]){
                counter++;
            }
        }
        if (counter<3&&finale.indexOf(element)==-1) {
            finale.push (element);
        }
    });

    return finale;
}

function main6 () {
    let array = [4,5,6,7,8,11,23,4,5,8,8,4];
    let string = 'puksjiojfbjdfj';
    let o = { 0: "H", 1: "Pass", 2: "Pass", 3: "Pass", 4: "i"};
    console.log (deletetrpl(array));
    console.log (deletetrpl(string));
    console.log (deletetrpl(o));
    return 0;
}

