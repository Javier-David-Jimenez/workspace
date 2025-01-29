// Importamos React, que es la biblioteca principal necesaria para crear componentes
// Sin este import, no podríamos usar la sintaxis JSX ni crear componentes
import React from 'react';
import Table from './Table';

// Definimos el primer componente llamado App
// La sintaxis "class ... extends React.Component" indica que estamos creando
// un componente basado en clases que hereda todas las funcionalidades de React
class App extends React.Component {

  render() {
    const people = [
      {
        name: 'Fausto',
        job: 'Developer'
      },
      {
        name: 'López',
        job: 'Developer'
      },
      {
        name: 'Mendoza',
        job:  'albañil'
      },
      {
        name: 'Pérez',
        job: 'albañil'
      }
    ];
    return (
      <div className="container">
        <Table peopleData={people} />
      </div>
    );
  }
}

// Definimos el segundo componente llamado App2
// También es un componente de clase que hereda de React.Component
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

  // El método render obligatorio para App2
  render() {
    // Definimos una constante con el nombre del usuario
    const name = "FaustoLópez";
    // Llamamos a getGreeting con el nombre y retornamos su resultado
    return this.getGreeting(name);
  }    
}

// Exportamos ambos componentes para poder importarlos en otros archivos
// Esta sintaxis permite exportar múltiples elementos a la vez
export { App, App2, Table, };