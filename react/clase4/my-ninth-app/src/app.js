import React from 'react';

class EventExample extends React.Component {
    constructor(props) {
        // super(props) llama al constructor de la clase padre (React.Component)
        // Es necesario para poder usar 'this.props' en el constructor
        super(props);
        this.manejadorClick = this.manejadorClick.bind(this);
    }

    // Método tradicional - necesita bind en el constructor
    // para que 'this' funcione correctamente
    manejadorClick() {
        console.log("this is:", this);
    }

    // Método definido como arrow function (función flecha)
    // No necesita bind porque las arrow functions mantienen el contexto de 'this'
    campoPublico = () => {
        console.log("this is:", this);
    };

    // Método tradicional - necesitará bind o arrow function en el onClick
    // DESACONSEJADO: No se recomienda usar este método
    metodoDeClase() {
        console.log("this is:", this);
    }

    // Método para eliminar fila, definido como arrow function
    // Recibe dos parámetros: id y el evento (e)
    deleteRow = (id, e) => {
        console.log(e, id);
    };

    render() {
        // Definimos una constante que usaremos en los botones de eliminar
        const id = 10;
        
        return (
            <>
                {/* Botón 1: Usa el método con bind del constructor */}
                <button onClick={this.manejadorClick}>
                    Manejador ligado con bind
                </button>

                {/* Botón 2: Usa el método definido como arrow function */}
                <button onClick={this.campoPublico}>
                    Manejador con campoPublico
                </button>

                {/* Botón 3: Usa una arrow function en línea para llamar al método */}
                <button onClick={() => this.metodoDeClase()}>
                    Manejador con métodos de clase
                </button>

                {/* Botón 4: Usa arrow function para pasar parámetros al deleteRow */}
                <button onClick={(e) => this.deleteRow(id, e)}>
                    eliminar con funcion flecha
                </button>

                {/* Botón 5: Usa bind para pasar parámetros al deleteRow */}
                <button onClick={this.deleteRow.bind(this, id)}>
                    eliminar con bind
                </button>
            </>
        );
    }
}

export default EventExample;