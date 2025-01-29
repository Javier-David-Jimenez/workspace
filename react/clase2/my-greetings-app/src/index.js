
import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

import App from './app';

// Creamos el punto de entrada de React
// getElementById('root') busca un elemento HTML con id="root" donde se montará la app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos la aplicación
root.render(
  // StrictMode es una herramienta de desarrollo que ayuda a encontrar
  // problemas potenciales en la aplicación. No afecta a la producción
  <React.StrictMode>
    <App />     
  </React.StrictMode>
);