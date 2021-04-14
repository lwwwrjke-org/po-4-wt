    function union(first , second , third){
        let unique = [];
        unique = new Set(first.concat(second).concat(third));
        return [...unique];
    }
    let a = [10 , 2 , 2 ,3];
    let b = [10 , 14 ,3];
    let c = [10 , 2 ,21];

    alert(union(a,b,c));
