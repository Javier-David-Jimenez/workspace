import React from 'react';
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Warning from './Warning';

// Componente principal que maneja la lógica del estado de login
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        // Inicializa el estado isLoggedIn como false
        this.state = {isLoggedIn: false};
        // Binds de los métodos
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    // Métodos para cambiar el estado de login
    handleLoginClick = () => {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        // Renderiza condicionalmente el botón según el estado
        let button = isLoggedIn ? 
            <LogoutButton onClick={this.handleLogoutClick} /> : 
            <LoginButton onClick={this.handleLoginClick} />;

        return (
            <div>
                <Warning warn={isLoggedIn} />
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export default LoginControl;