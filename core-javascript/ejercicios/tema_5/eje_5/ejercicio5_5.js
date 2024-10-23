/*
Pedirle al usuario que ingrese un dígito y un número, después llamar a
una función que diga el número de veces que aparece el dígito en el
número.
*/

function countDigit() {
    let digit = document.getElementById('digit').value;
    let number = document.getElementById('number').value;
    let resultDiv = document.getElementById('result');

    // Validar si el dígito ingresado es un número entre 0 y 9
    if (digit === '' || digit < 0 || digit > 9) {
        resultDiv.textContent = "Por favor, ingresa un dígito válido (0-9).";
        return;
    }

    // Validar que el número ingresado no esté vacío
    if (number === '') {
        resultDiv.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    // Contar cuántas veces aparece el dígito en el número
    //const count = number.split('').filter(num => num === digit).length;

    // Paso 1: Dividir el número en un array de caracteres (dígitos)
    let digitsArray = number.split('');

    // Paso 2: Filtrar los elementos que coinciden con el dígito ingresado
    let filteredArray = digitsArray.filter(num => num === digit);

    // Paso 3: Contar la cantidad de elementos en el array filtrado
    let count = filteredArray.length;


    // Mostrar el resultado
    resultDiv.textContent = `El dígito ${digit} aparece ${count} veces en el número ${number}.`;
}

