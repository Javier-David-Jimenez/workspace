const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getMultiples = (size, base) => {
  const multiplesArray = [];
  for (let i = 1; i <= size; i += 1) {
    multiplesArray.push(base * i);
  }
  return multiplesArray;
};

const start = () => {
  rl.question('Introduce el tamaño del array: ', (sizeInput) => {
    const arraySize = parseInt(sizeInput, 10);
    rl.question('Introduce el número base para obtener los múltiplos: ', (numberInput) => {
      const baseNumber = parseInt(numberInput, 10);
      const multiplesArray = getMultiples(arraySize, baseNumber);

      console.log(`Array de múltiplos: [${multiplesArray.join(', ')}]`); // Mostramos el array de múltiplos
      rl.close();
    });
  });
};

module.exports = {
  getMultiples,
  start,
};
