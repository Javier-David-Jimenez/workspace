const StringTransformer = require('./StringTransformer');

// Creamos una instancia de StringTransformer con un string inicial
const transformer = new StringTransformer('Divide esta frase');

// Aplicamos los métodos y mostramos los resultados en la consola
console.log(transformer.toCharArray());   // Output: [ 'D', 'i', 'v', 'i', 'd', 'e', ' ', 'e', 's', 't', 'a', ' ', 'f', 'r', 'a', 's', 'e' ]

console.log(transformer.shuffleChars());  // Output: Una versión mezclada de los caracteres, por ejemplo: 'sviedrta af ese iD'

console.log(transformer.reverseChars());  // Output: 'esarf atse ediviD'

console.log(transformer.removeVowels());  // Output: 'Dvd st frs'

console.log(transformer.removeConsonants());  // Output: 'iie ea ae'

console.log(transformer.toWordArray());   // Output: [ 'Divide', 'esta', 'frase' ]

console.log(transformer.reverseWords());  // Output: 'frase esta Divide'

// Para probar con un string vacío:
const emptyTransformer = new StringTransformer('');
console.log(emptyTransformer.removeVowels());  // Output: ''
console.log(emptyTransformer.removeConsonants());  // Output: ''

// Para probar con múltiples espacios:
const spacedTransformer = new StringTransformer('  Divide   esta   frase  ');
console.log(spacedTransformer.toWordArray());   // Output: [ 'Divide', 'esta', 'frase' ]
console.log(spacedTransformer.reverseWords());  // Output: 'frase esta Divide'
