
import React from 'react';                    
import ReactDOM from 'react-dom/client';      
import './index.css';                       

// Primera clase: App
class App extends React.Component {           // Creamos un componente llamado App que hereda de React.Component
  render() {                                  // El método render es obligatorio en componentes de clase y define qué se mostrará
    return (
      // Los fragmentos <> </> son una característica de React que permite agrupar elementos
      // sin añadir nodos extra al DOM. Es útil cuando necesitamos retornar múltiples elementos
      <> 
        <h1>Hola Mundo</h1>
        <h2>Probamos metiendo en etiquetas vacia</h2>
      </> 
    );
  }
}

// Segunda clase: App2
class App2 extends React.Component {
  // Método que convierte texto a mayúsculas usando una función flecha
  // Las funciones flecha mantienen el contexto de 'this' automáticamente
  upperfunction = (name) => String(name).toUpperCase();

  // Método que decide qué saludo mostrar basado en si hay un usuario o no
  getGreeting(user) {
    if (user){
      // Si hay un usuario, muestra un saludo personalizado con su nombre en mayúsculas
      return <h1>Hola {this.upperfunction(user)}!</h1>;
    }
    // Si no hay usuario, muestra un saludo genérico
    return <h1>Hola Extraño!</h1>;
  }

  render() {
    // Definimos una constante con el nombre del usuario
    const name = "FaustoLópez";
    // Llamamos a getGreeting con el nombre y renderizamos el resultado
    return this.getGreeting(name);
  }    
}

// Configuración del punto de entrada de la aplicación
// Creamos el punto de entrada de React en el elemento con ID 'root' del HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos la aplicación
root.render(
  // StrictMode es una herramienta para destacar problemas potenciales en la aplicación
   // Renderizamos el componente App
   // Renderizamos el componente App2
  <React.StrictMode>
    <App />   
    <App2 />   
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

