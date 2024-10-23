// index.test.js
const { fizzBuzz } = require('./ejercicio6_1');

test('returns "fizz" for numbers divisible by 3', () => {
  expect(fizzBuzz(3)).toBe('fizz');
});

test('returns "fizz" for numbers divisible by 3', () => {
  expect(fizzBuzz(18)).toBe('fizz');
});

test('returns "buzz" for numbers divisible by 5', () => {
  expect(fizzBuzz(5)).toBe('buzz');
});

test('returns "buzz" for numbers divisible by 5', () => {
  expect(fizzBuzz(55)).toBe('buzz');
});

test('returns "fizzbuzz" for numbers divisible by both 3 and 5', () => {
  expect(fizzBuzz(15)).toBe('fizzbuzz');
});

test('returns "fizzbuzz" for numbers divisible by both 3 and 5', () => {
  expect(fizzBuzz(45)).toBe('fizzbuzz');
});

test('returns the number as a string when not divisible by 3 or 5', () => {
  expect(fizzBuzz(1)).toBe('1');
});

test('returns the number as a string when not divisible by 3 or 5', () => {
  expect(fizzBuzz(112)).toBe('112');
});
