const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
  it('returns "Fizz" if divisible by 3', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  it('returns "Fizz" if divisible by 3', () => {
    expect(fizzBuzz(9)).toEqual('Fizz');
  });

  it('returns "Buzz" if divisible by 5', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });

  it('returns "Buzz" if divisible by 5', () => {
    expect(fizzBuzz(20)).toEqual('Buzz');
  });

  it('returns "FizzBuzz" if divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });

  it('returns "FizzBuzz" if divisible by 3 and 5', () => {
    expect(fizzBuzz(45)).toEqual('FizzBuzz');
  });

  it('returns the number if not divisible by 3 and 5', () => {
    expect(fizzBuzz(1)).toEqual(1);
  });

  it('returns the number if not divisible by 3 and 5', () => {
    expect(fizzBuzz(19)).toEqual(19);
  });
});
