import React from 'react';

const UserGreeting = () => {
    return <h1>Welcome back!</h1>;
    };

const SignUp = () => {
    return <h1>Sign up to get started!</h1>;
    };

const Greeting =  ({isLoggedIn}) => {
    if (isLoggedIn) {
        return <UserGreeting />;    
    } else {
        return <SignUp />;
    }
};

export default Greeting;