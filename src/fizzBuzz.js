var FizzBuzz = function () {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

FizzBuzz.prototype.isDivisibleByFive  = function(number){
  return this._isDivisibleBy(number, 5);
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number){
  return ( this.isDivisibleByThree(number) && this.isDivisibleByFive(number) );
};

FizzBuzz.prototype._isDivisibleBy = function(number, divisor){
  return( number % divisor === 0 );
};

FizzBuzz.prototype.says = function(number){
  if( this.isDivisibleByFifteen(number) ){
    return "FizzBuzz"
  } else if ( this.isDivisibleByThree(number) ){
    return "Fizz"
  } else if( this.isDivisibleByFive(number) ){
    return "Buzz"
  } else {
  return number
  }
};
