// Importamos React, que es necesario para crear componentes
import React from 'react';

// Creamos el componente Welcome como una función que recibe props como parámetro
// Usamos la desestructuración para extraer directamente la prop 'name'
const Welcome = ({ name }) => {
    // El componente retorna un elemento h2 con el mensaje de bienvenida
    // Usamos las llaves {} para insertar el valor de name en el texto
    return (
        <h2>Hola {name}, bienvenido al curso de los Albañiles Digitales</h2>
    );
};

// Exportamos el componente para poder usarlo en otros archivos
export default Welcome;