import React from 'react';                     
import ReactDOM from 'react-dom/client';       
import './index.css';                          

// Esto busca un elemento en nuestro HTML que tenga id="root" y lo prepara para usar React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Definimos la función tick que se encargará de actualizar nuestro reloj
function tick() {

  const element = (
    <div>
      <h1>Hola, mundo!</h1>
      {/* new Date().toLocaleTimeString() obtiene la hora actual y la convierte a texto legible */}
      {/* Las llaves {} nos permiten insertar código JavaScript dentro de nuestro HTML JSX*/}
      <h2>Son las {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  
  // Renderizamos (mostramos) nuestro elemento en la página
  // Cada vez que se llama a root.render(), React actualiza solo las partes que han cambiado
  root.render(element);
}

// En este caso, llamamos a nuestra función tick cada 1000 milisegundos (1 segundo)
// Esto hace que nuestro reloj se actualice cada segundo
setInterval(tick, 1000);