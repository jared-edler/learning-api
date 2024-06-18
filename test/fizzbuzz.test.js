const fizzbuzz = require('../lib/fizzbuzz');

describe('fizzbuzz', () => {
  it('should return "Fizz" for multiples of 3', () => {
    let result = fizzbuzz(3)
    expect(result).toEqual("fizz")
  });

  it('should return "Buzz" for multiples of 5', () => {
    let result = fizzbuzz(5)
    expect(result).toEqual("buzz")
  });

  it('should return "FizzBuzz" for multiples of both 3 and 5', () => {
    let result = fizzbuzz(15)
    expect(result).toEqual("fizzbuzz")
  });

  it('should return the number itself for non-multiples of 3 or 5', () => {
    let result = fizzbuzz(23)
    expect(result).toEqual(23)
  });

  it('should return an error message if parameter is not a number', () => {

  });
});