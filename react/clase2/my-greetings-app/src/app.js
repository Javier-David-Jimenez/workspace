
import React from 'react';
import Welcome from './Welcome';

// Definimos nuestro componente App
function App() {
  // Podemos crear un array con los nombres de las personas que queremos saludar
  // Esto hace nuestro código más organizado y fácil de mantener
  const names = [
    "Juan",
    "María",
    "Pedro"
  ];

  return (
    <div className="App">
      {/* Renderizamos tres componentes Welcome, cada uno con un nombre diferente */}
      {/* Cada componente Welcome recibirá una prop 'name' con un valor distinto */}
      <Welcome name={names[0]} />
      <Welcome name={names[1]} />
      <Welcome name={names[2]} />
      
      {/* Alternativa usando map (comentado) */}
      {/* Esta es otra forma de hacer lo mismo, más escalable */}
      {/* {names.map((name, index) => (
        <Welcome key={index} name={name} />
      ))} */}
    </div>
  );
}

// Exportamos el componente App para poder usarlo en otros archivos
export default App;