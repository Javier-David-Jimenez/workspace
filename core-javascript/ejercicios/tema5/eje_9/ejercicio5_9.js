/*
Escribir la función titulo(), la cual recibe un string y lo retorna convirtiendo
la primera letra de cada palabra a mayúscula y las demás letras a
minúscula, dejando inalterados los demás caracteres. Precondición: el
separador de words es el espacio: " "
*/

function titulo() {
    // Obtener el texto ingresado por el usuario
    let textInput = document.getElementById('textInput').value;
    
   

    // Paso 1: Convertir toda la cadena a minúsculas
    let textLower = textInput.toLowerCase();

    // Paso 2: Dividir el texto en un array de words
    let words = textLower.split(' ');

    // Paso 3: Recorrer cada palabra y convertir la primera letra a mayúscula
    let transformedWord = words.map(word => {
        let firstLetter = word.charAt(0).toUpperCase(); // Obtener la primera letra en mayúscula
        let restWord = word.slice(1);  // El resto de la palabra ya está en minúsculas
        return firstLetter + restWord; // Combinar la primera letra en mayúscula con el resto
    });

    // Paso 4: Unir las words transformadas con espacios
    let result = transformedWord.join(' ');

    // Mostrar el result
    document.getElementById('result').textContent = result;
}
