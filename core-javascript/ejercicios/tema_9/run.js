const capitalizeLastName = require('./eje917.js');

console.log(capitalizeLastName('marisa tomei'));         // Output: 'Marisa TOMEI'
console.log(capitalizeLastName('marisa    tomei')); // Output: 'Marisa TOMEI'
console.log(capitalizeLastName(123));                    // Output: Error message and null
console.log(capitalizeLastName('marisa'));                // Output: Error message and null
