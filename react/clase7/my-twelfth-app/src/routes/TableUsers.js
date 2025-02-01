import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import Table from './Table';
import Form from './Form';

// Convertimos todo a un componente funcional
const TableUsers = () => {
  // Este hook reemplaza la necesidad de cargar datos en componentDidMount
  const initialUsers = useLoaderData();
  
  // Este useState reemplaza el this.state de la clase
  // initialUsers viene del loader de React Router
  const [people, setPeople] = useState(initialUsers);

  // Esta función reemplaza el método removePeople de la clase
  // Ya no necesitamos usar this porque estamos en un componente funcional
  const removePeople = (index) => {
    setPeople(currentPeople => 
      currentPeople.filter((_, i) => i !== index)
    );
  };

  // Esta función reemplaza el método handleSubmit de la clase
  // Usamos setPeople directamente en lugar de this.setState
  const handleSubmit = (character) => {
    setPeople(currentPeople => [...currentPeople, character]);
  };

  // Esto estaba en el método render de la clase
  const title = <h1>Nice People</h1>;

  // Este return reemplaza el método render de la clase
  return (
    <div className="container">
      <Table 
        peopleData={people} 
        removePeople={removePeople} 
        title={title}
      />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

// Estas funciones auxiliares se mantienen igual porque son independientes del componente
export async function loader() {
  const url = "https://dummyjson.com/users";
  let userApi = await fetch(url);
  userApi = await userApi.json();
  const users = userApi.users.map((user) => {
    return {
      name: user.firstName,
      job: user.company.title
    };
  });
  return users;
}

export async function action({ request }) { 
  const formData = await request.formData();
  const fields = Object.fromEntries(formData);
  let user = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: fields.name,
      lastName: "Test",
      age: 250,
      company: {
        title: fields.job,
      },
    }),
  });
  user = await user.json();
  return user;
}

export default TableUsers;
