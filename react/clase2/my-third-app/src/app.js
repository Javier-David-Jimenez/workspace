// Importamos React, que es la biblioteca principal necesaria para crear componentes
// Sin este import, no podríamos usar la sintaxis JSX ni crear componentes
import React from 'react';

// Definimos el primer componente llamado App
class App extends React.Component {
  // El método render es obligatorio en todo componente de clase
  // Define qué elementos HTML/JSX se mostrarán cuando usemos este componente
  render() {
    return (
      // Los fragmentos <> </> son como contenedores invisibles
      // Nos permiten retornar múltiples elementos sin crear un div adicional
      <> 
        <h1>Hola Mundo</h1>
        <h2>Probamos metiendo en etiquetas vacia</h2>
      </> 
    );
  }
}

// Definimos el segundo componente llamado App2
class App2 extends React.Component {
  // Esta es una función flecha que convierte texto a mayúsculas
  // Está definida como propiedad de clase usando la sintaxis de campo de clase
  // Las funciones flecha mantienen automáticamente el contexto de 'this'
  upperfunction = (name) => String(name).toUpperCase();

  // Este método determina qué saludo mostrar basado en si existe un usuario
  // Es un método regular de clase que recibe un parámetro 'user'
  getGreeting(user) {
    if (user){
      // Si hay un usuario, muestra su nombre en mayúsculas
      // Usamos {} para insertar expresiones JavaScript dentro de JSX
      return <h1>Hola {this.upperfunction(user)}!</h1>;
    }
    // Si no hay usuario, muestra un saludo genérico
    return <h1>Hola Extraño!</h1>;
  }

  render() {
    const name = "FaustoLópez";
    // Llamamos a getGreeting con el nombre y retornamos su resultado
    return this.getGreeting(name);
  }    
}

// Exportamos ambos componentes para poder importarlos en otros archivos
export { App, App2 };