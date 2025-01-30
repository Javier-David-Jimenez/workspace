import React, { useState } from 'react';

import Table from './Table';
import Form from './Form';

const App = () => {
  const [people, setPeople] = useState([]);
  const removePeople = (index) => {
    setPeople(people.filter((character, i) => {
       return i !== index;
    }));
  };

 const handleSubmit = (character) => {
    setPeople([...people, character]);
  };
  const title = <h1>Nice People</h1>;

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
  
    

export default App;