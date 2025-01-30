// Importamos las bibliotecas necesarias de React
import React from 'react';                    // Importamos la biblioteca principal de React
import ReactDOM from 'react-dom/client';      // Importamos ReactDOM para renderizar en el navegador
import './index.css';
import App from './App';                     


const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos la aplicación
root.render(
  // StrictMode es una herramienta para destacar problemas potenciales en la aplicación
   // Renderizamos el componente App
   // Renderizamos el componente App2
  <React.StrictMode>
    <App />      
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

