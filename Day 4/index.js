

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter first number: ", (num1) => {
  rl.question("Enter operator (+, -, *, /): ", (operator) => {
    rl.question("Enter second number: ", (num2) => {

      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      let result;


      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            result = "Error: Division by zero!";
          }
          break;
        default:
          result = "Invalid operator!";
      }

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
