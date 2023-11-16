<!-- The basic syntax for JavaScript functions -->
<!-- fizzbuzz exercise using function -->
function fizzBuzz (number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("fizzbuzz")
  }
  else if ( number % 3 === 0 ) {
    console.log("fizz")
  }
  else if (number % 5 === 0 ) {
    console.log("buzz")
  }
  else {
    console.log("not a valid number ")
  }
}

fizzBuzz(3)