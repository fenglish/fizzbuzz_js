function fizzBuzz(number){
  this.number = number
  return number
}

fizzBuzz.prototype.isDivisibleBy = function(divisor, number) {
  if (number % divisor === 0) {
    return true;
  } else {
    return false;
  }
}
