describe("fizzBuzz", function(){
  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new fizzBuzz();
  });


    it("should be able to return 1", function(){
      var number = 1;
      expect(fizzBuzz(number)).toEqual(number);
    });

    it("should know if the number is divisible by 3", function(){
      var number = 3;
      expect(fizzbuzz.isDivisibleBy(3, number)).toEqual(true);
    });

    it("should know if the number is not divisible by 3", function(){
      var number = 4;
      expect(fizzbuzz.isDivisibleBy(3, number)).toEqual(false);
    });

    it("should know if the number is divisible by 5", function(){
      var number = 5;
      expect(fizzbuzz.isDivisibleBy(5, number)).toEqual(true);
    });

    it("should know if the number is not divisible by 5", function(){
      var number = 7;
      expect(fizzbuzz.isDivisibleBy(5, number)).toEqual(false);
    });

    it("should know if the number is divisible by 3 and 5", function() {
      var number = 15;
      expect(fizzbuzz.isDivisibleBy(15, number)).toEqual(true);
    });

    it("should know if the number is not divisible by 3 and 5", function() {
      var number = 14;
      expect(fizzbuzz.isDivisibleBy(15, number)).toEqual(false);

    });

});
