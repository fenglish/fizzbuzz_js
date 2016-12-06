function fizzBuzz(number){
    this.number = number
    return number
  }


fizzBuzz.prototype.isDivisibleBy3 = function(number){
  if (number % 3 === 0){ return true
  } else { return false }
}

fizzBuzz.prototype.isDivisibleBy5 = function(number){
  if (number % 5 === 0){ return true
  } else { return false }
}
