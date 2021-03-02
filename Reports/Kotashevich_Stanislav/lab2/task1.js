function TASK1(){
    while (true){
        let firstInput = prompt("Enter the first number");
        let secondInput = prompt("Enter the second number");
    
        let one = Number(firstInput);
        let two = Number(secondInput);
    
        if (Number.isNaN(one)){
            alert("First input is not a number");
            break;
        }
        if (Number.isNaN(two)){
            alert("Second input is not a number");
            break;
        }
    
        if (one == two){
            alert("The numbers are equal");
        } else if (one > two){
            alert("The first number is bigger than the second");
        } else{
            alert("The second number is bigger than the first");
        };
    }
}