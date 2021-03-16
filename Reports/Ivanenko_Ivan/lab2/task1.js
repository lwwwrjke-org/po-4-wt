
function compare(number1, number2) {
  if(number1 > number2) {
    alert("The first number is greater");
  }
  else if (number2 > number1) {
    alert("The second number is greater");
  }
  else if(number1 == number2){
    alert("Number are equal");
  }
  else{
    alert("Something went wrong..");
  }
}


let input1;
let input2;

while(true) {

  // Если пользователь ввел не число, срипт просит пользователя ввести число еще раз.
  do{
    input1 = prompt("Input first number: ");
  } while(isNaN(input1));
  number1 = Number(input1);

  do{
    input2 = prompt("Input second number: ");
  } while(isNaN(input2));
  number2 = Number(input2);

  compare(number1, number2);
}
