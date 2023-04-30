const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter an interger: ", function(num) {
  num = parseInt(num);
    if (num % 2 === 0) {
      console.log(num + " is an even number.");
    } else {
      console.log(num + " is an odd number.");
    }
    rl.close();
});