// Importamos las bibliotecas necesarias de React
import React from 'react';                    // Importamos la biblioteca principal de React
import ReactDOM from 'react-dom/client';      // Importamos ReactDOM para renderizar en el navegador
import './index.css';  
import EventExample from './app';                   

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <React.StrictMode>
    <EventExample />   
  </React.StrictMode>
);

