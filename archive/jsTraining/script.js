function fizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
    return;
  }
  if (num % 3 == 0) {
    console.log("Fizz");
  }
  if (num % 5 == 0) {
    console.log("Buzz");
  }
}

let answer = parseInt(prompt("Nummer eingeben"));
fizzBuzz(answer);