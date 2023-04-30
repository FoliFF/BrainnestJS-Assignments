const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", function(num1) {
  rl.question("Enter second number: ", function(num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (num1 > num2) {
      console.log("The larger number is " + num1);
    } else if (num2 > num1) {
      console.log("The larger number is " + num2);
    } else {
      console.log("The two numbers are equal");
    }
    rl.close();
  });
});