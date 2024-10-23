// fizzbuzz.js
function fizzBuzz(number) {
  let result = ''; 

 
  if (number % 3 === 0) {
    result += 'fizz';
  }


  if (number % 5 === 0) {
    result += 'buzz';
  }

  if (result === '') {
    result = number.toString();
  }

 
  console.log(result); 
  return result;
}

module.exports = {
  fizzBuzz,
};
