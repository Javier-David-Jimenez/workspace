import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";

const UseForm = () => {
    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        name: '',
        job: ''
    });

    // Obtener el estado de navegación para mostrar estado de carga
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    // Manejar cambios en los inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Manejar el envío del formulario
    const handleSubmit = () => {
        // Limpiar el formulario después del envío
        setFormData({
            name: '',
            job: ''
        });
    };

    return (
        <Form 
            method="post" 
            id="user-form" 
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="job">Trabajo</label>
                <input 
                    type="text"
                    id="job"
                    name="job"
                    value={formData.job}
                    onChange={handleChange}
                    required
                    className="form-control"
                />
            </div>
            
            <button 
                type="submit" 
                disabled={isSubmitting}
                className="submit-button"
            >
                {isSubmitting ? 'Añadiendo...' : 'Añadir Usuario'}
            </button>
        </Form>
    );
};

export default UseForm;