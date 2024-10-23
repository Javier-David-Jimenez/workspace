function getValuesInRange(set, min, max) {
    // Creamos un nuevo Set para almacenar los valores en el rango
    const resultSet = new Set();

    // Iteramos sobre cada valor en el set original
    for (const value of set) {
        // Verificamos si el valor está dentro del rango
        if (value >= min && value <= max) {
            resultSet.add(value); // Añadimos el valor al nuevo Set
        }
    }

    return resultSet; // Devolvemos el Set con los valores en el rango
}

const numbers = new Set([1, 5, 10, 15, 20, 25, 30, 35, 40]);

const min = 10;
const max = 30;

const filteredValues = getValuesInRange(numbers, min, max);
console.log(filteredValues); // Set { 10, 15, 20, 25, 30 }
