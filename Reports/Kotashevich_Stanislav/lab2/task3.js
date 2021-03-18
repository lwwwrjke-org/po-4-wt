function TASK3(){
    function getFibonacci(x){
        if (x > 2){
            return getFibonacci(x - 1) + getFibonacci(x - 2);
        }
        else {
            return 1;
        }
    }
    
    
    let number = prompt("Which number of Fibonacci numbers do you want");
    
    number = Number(number);
    
    if (isNaN(number)){
        alert("Invalid input");
        throw "Invalid input";
    }
    
    alert(`${number} number - ${getFibonacci(number)}`);
}