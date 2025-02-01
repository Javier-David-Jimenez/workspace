import React, { useState, useEffect} from 'react';
import { useLoaderData, userActionData } from "react-router-dom";
import Table from './Table';
import UseForm from './Form';

const TableUsers = () => {
  const initialUsers = useLoaderData();
  const userAdded = userActionData();
  const [people, setPeople] = useState(initialUsers);

    useEffect(() => {
      if (userAdded) {
        const newUser = {
          id: userAdded.id,
          name: userAdded.firstName,
          job: userAdded.company.title 
        };
        setPeople((p) => [newUser, ...p]);
      }
    }, [userAdded]);
    const removePeople = (index) => {
    };
    const handleSubmit = (character) => {
    };
    const title = <h1>Nice People</h1>;
    return (
      <div className="container">
        <UseForm handleSubmit={handleSubmit} />
        <Table peopleData={people} removePeople={removePeople} title={title} />
      </div>
    );

  };


// Función para cargar usuarios iniciales
export async function loader() {
  try {
    const response = await fetch("https://dummyjson.com/users?limit=10"); // Limitamos a 10 usuarios para ejemplo
    const data = await response.json();
    
    // Transformamos los datos al formato que necesitamos
    return data.users.map(user => ({
      name: user.firstName,
      job: user.company?.title || 'No especificado'
    }));
  } catch (error) {
    console.error('Error cargando usuarios:', error);
    return []; // Retornamos array vacío en caso de error
  }
}

// Función que maneja el envío del formulario
export async function action({ request }) {
  try {
    // 1. Obtenemos los datos del formulario
    const formData = await request.formData();
    const fields = Object.fromEntries(formData);

    // 2. Hacemos la petición a la API
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: fields.name,
        lastName: "Apellido", // Podríamos añadir este campo al formulario
        age: 25, // Podríamos añadir este campo al formulario
        company: {
          title: fields.job
        }
      })
    });

    // 3. Procesamos la respuesta
    if (!response.ok) {
      throw new Error('Error al añadir usuario');
    }

    const newUser = await response.json();

    // 4. Transformamos la respuesta al formato que usa nuestra aplicación
    return {
      name: newUser.firstName,
      job: newUser.company?.title || fields.job
    };

  } catch (error) {
    console.error('Error añadiendo usuario:', error);
    throw error; // React Router manejará el error
  }
}



export default TableUsers;