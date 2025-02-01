import React, { Component} from "react";
import { Form } from "react-router-dom";

class UseForm extends Component {
    initialState = {
    };
    state = this.initialState;
    handleChange = (event) => {
    };
    submitForm = () => {
        this.setState(this.initialState);
    };
    render() {
        const { name, job } = this.state;
        return (
            <Form method="post" id="user-form" onSubmit={this.submitForm}>
                <label htmlFor="name">Nombre</label>
                <input type="text" 
                        onChange={this.handleChange}
                />
                <label htmlFor="job">Trabajo</label>
                <input type="text" 
                        onChange={this.handleChange}
                />
                {/* <input type="button" value=Submit"
                        onClick={this.submitForm} /> */}
                <input type="submit" value="Submit" />
            </Form>
        );
    }
}

    
    
    
    
    
    
   

export default UseForm;