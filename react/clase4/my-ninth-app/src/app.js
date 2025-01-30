import React, { Component } from 'react';

class EventExample extends React.Component {
    constructor(props) {
        // Este enlace es necesario para hacer que 'this' funcione en el callback
        super(props);
        this.manejadorClick = this.manejadorClick.bind(this);
    }

    manejadorClick() {
        // Manejador ligado en el constructor
        console.log("this is:", this);
    }

    campoPublico = () => {
        // Campo público a usar como manejador
        console.log("this is:", this);
    };

    metodoDeClase() {
        // Método de clase
        console.log("this is:", this);
    }

    render() {
        return (
            <>
                <button onClick={this.manejadorClick}>
                    Manejador ligado con bind
                </button>
                <button onClick={this.campoPublico}>
                    Manejador con campoPublico
                </button>
                <button onClick={() => this.metodoDeClase()}>
                    Manejador con métodos de clase
                </button>
            </>
        );
    }
}

export default EventExample;