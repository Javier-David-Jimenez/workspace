
import React from 'react';

const FancyBorder = (props) => {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

const Welcomedialog = () => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Bienvenido
      </h1>
      <p className="Dialog-message">
        Gracias por visitar nuestra nave espacial!
      </p>
    </FancyBorder>
  );
}

const GoodByedialog = () => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Adiós
      </h1>
      <p className="Dialog-message">
        Gracias por volar con nosotros!
      </p>
    </FancyBorder>
  );
}

const App = () => {
  return (
    <>
      <Welcomedialog />
      <GoodByedialog />
    </>
  );
}


// Exportamos el componente App para poder usarlo en otros archivos
export default App;