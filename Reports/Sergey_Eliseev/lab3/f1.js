let a = prompt("input a begin of ur array:");
a = parseInt(a);

let b = prompt("input a end of ur array:" );
b = parseInt(b);

let input = prompt("type ur step:\n" , 1);
input = parseInt(input) ;

function range(begin,end,step){
    
    let arr = [];

    if(Math.sign(step) == 1){
        for ( let i = begin ; i <= end ; i += step){
            arr.push(i);
        }     
    } else if (Math.sign(step) == -1){
        for ( let i = begin ; i >= end ; i += step){
            arr.push(i);
        }    
    } else {
        throw ("unexpected step");
    }
  return arr;
}

alert(range(a , b, input));
