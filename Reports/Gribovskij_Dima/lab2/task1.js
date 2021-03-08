function task1() {
    while(true) {
        let first = prompt("first = ", 0);
        first = Number(first);
        if (isNaN(first)) {
            alert("First input - not a number\n");
            continue;
        }
    
        let second = prompt("second = ", 0);
        second = Number(second);
        if (isNaN(second)) {
            alert("Second input - not a number\n");
            continue;
        }
    
        if (first < second) {
            alert("First number less");
        } else if (first > second) {
            alert("Second number less");
        } else {
            alert("Numbers even");
        }
    }
}
