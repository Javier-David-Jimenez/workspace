import React, { Component } from 'react';

import Table from './Table';
import Form from './Form';


class TableUsers extends Component {
  state = {
     people: [],
  };

  removePeople = (index) => {
    const { people } = this.state;

    this.setState({
      people: people.filter((character, i) => {
        return i !== index;
      }),
    });
  }

  handleSubmit = (character) => {
    this.setState({ people: [...this.state.people, character] });
  };

  render() {
    const title = <h1>Nice People</h1>
    return (
      <div className="container">
        
        <Table 
        peopleData={this.state.people} 
        removePeople={this.removePeople} 
        title={title}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}


export default TableUsers;