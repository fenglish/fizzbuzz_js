describe('FizzBuzz', function() {

  var fizzbuzz;

  beforeEach(function(){
      fizzbuzz = new FizzBuzz();
  });


  describe('knows when a number is', function(){
    it ("divisible by 3", function(){
      expect( fizzbuzz.isDivisibleByThree(3) ).toBe(true);
    });
    it ("divisible by 5", function(){
      expect( fizzbuzz.isDivisibleByFive(5) ).toBe(true);
    });
    it ("divisible by 3 and 5", function(){
      expect( fizzbuzz.isDivisibleByFifteen(15) ).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it ("divisible by 3", function(){
      expect( fizzbuzz.isDivisibleByThree(1) ).toBe(false);
    });
    it ("divisible by 5", function(){
      expect( fizzbuzz.isDivisibleByFive(4) ).toBe(false);
    });
    it ("divisible by 15", function(){
      expect( fizzbuzz.isDivisibleByFifteen(13) ).toBe(false);
    });
  });

  describe('when playing, says', function(){
    it ("should return 'Fizz' when divisibled by 3", function(){
      expect( fizzbuzz.says(3) ).toEqual("Fizz");
    });
    it ("should return 'Buzz' when divisibled by 5", function(){
      expect( fizzbuzz.says(5) ).toEqual("Buzz")
    });
    it ("should return 'FizzBuzz' when divisibled by 15", function(){
      expect( fizzbuzz.says(15) ).toEqual("FizzBuzz")
    });
    it ("should return the number when the number is not divisible by 3 or 5 or 15", function(){
      expect( fizzbuzz.says(14) ).toEqual(14)
    });
  });

});
