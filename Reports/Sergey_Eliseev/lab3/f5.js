    function flatten(array){
        let value = [].concat(array) ;
        return value;
    }
    let a = [ 1 , [2 ,[3]]];
    alert (flatten(a));
