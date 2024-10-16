/*

Crea un programa que pida un valor de tamaño de array por input y
después el número del cuál se van a obtener múltiplos y devuelva un
array con el tamaño puesto de múltiplos de ese número (2, 4 => [4, 8])


recibir input en node
buscar problemas

solucion de html......j

*/
/*
inp

*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arraySize; // Para almacenar el tamaño del array
let baseNumber; // Para almacenar el número base

// Pregunta el tamaño del array
rl.question('Introduce el tamaño del array: ', (sizeInput) => {
  arraySize = parseInt(sizeInput); // Convertir a número

  // Pregunta el número del cual se generarán múltiplos
  rl.question('Introduce el número base para obtener los múltiplos: ', (numberInput) => {
    baseNumber = parseInt(numberInput); // Convertir a número
    
    const multiplesArray = []; // Inicializamos el array vacío

    // Generamos los múltiplos y los añadimos al array
    for (let i = 1; i <= arraySize; i++) {
      multiplesArray.push(baseNumber * i);
    }

    console.log(`Array de múltiplos: [${multiplesArray.join(', ')}]`); // Mostramos el array de múltiplos

    rl.close(); // Cerramos la interfaz
  });
});
