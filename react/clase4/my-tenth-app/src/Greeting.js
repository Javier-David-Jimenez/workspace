import React from 'react';

// Componentes para mostrar diferentes mensajes según el estado de login
const UserGreeting = () => {
    return <h1>Welcome back!</h1>;
    };

const SignUp = () => {
    return <h1>Sign up to get started!</h1>;
    };

    // Componente que decide qué mensaje mostrar basado en isLoggedIn
const Greeting =  ({isLoggedIn}) => {
    if (isLoggedIn) {
        return <UserGreeting />;    
    } else {
        return <SignUp />;
    }
};

export default Greeting;