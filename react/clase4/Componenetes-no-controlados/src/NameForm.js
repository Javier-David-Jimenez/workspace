
import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      // Crea una referencia para acceder directamente al input
      this.input = React.createRef();
    }
  
    // Maneja el envío del formulario
    handleSubmit(event) {
      event.preventDefault(); // Evita que la página se recargue
      alert('A name was submitted: ' + this.input.current.value);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            {/* El input usa una referencia en lugar de state */}
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

  export default NameForm;