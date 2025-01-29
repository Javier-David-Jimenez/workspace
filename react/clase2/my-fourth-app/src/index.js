// Importamos React, necesario para usar JSX
import React from 'react';
// Importamos ReactDOM, que nos permite renderizar componentes React en el navegador
import ReactDOM from 'react-dom/client';
import './index.css';
// Importamos los componentes App y App2 desde el archivo App.js
import { App, App2, Table } from './app';

// Creamos el punto de entrada de React
// getElementById('root') busca un elemento HTML con id="root" donde se montará la app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos la aplicación
root.render(
  // StrictMode es una herramienta de desarrollo que ayuda a encontrar
  // problemas potenciales en la aplicación. No afecta a la producción
  <React.StrictMode>
    <App />   
    <App2 />
    <Table />   
  </React.StrictMode>
);