import React from "react";

/*
// Primero definimos el componente ListItem
const ListItem = ({value}) => {
    return <li>{value}</li>
}
    */
/*
function App() {
    const students = [
        {
            dni: 21856785,
            name: 'Joe',
            lastName: 'Dalton'
        },
        {
            dni: 38958123,
            name: 'Maria',
            lastName: 'Dalton'
        },
        {
            dni: 12345678,
            name: 'Michel',
            lastName: 'Dalton'
        }
    ];

    const listStudents = students.map((student) => {
        return <ListItem key={student.dni} value={student.lastName} />
    });

    return (
        <div className="App">
            <ul>{listStudents}</ul>
        </div>
    );
}

*/
class App extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { value: ""};
        this.state = {
            textarea: "Hello there, this is some text in a text area",
            select: "coconut"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const{ name, value } = event.target;
        this.setState({[name]: value});
    }
    handleSubmit(event) {
        alert('textarea submitted: ' + this.state.textarea);
        alert('select submitted: ' + this.state.select);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Textarea:
                        <textarea name="textarea" value={this.state.textarea} onChange={this.handleChange} />
                    </label>
                </form>
                    <br/>
                    <label>
                        Pick your favorite flavor:
                        <select name="select" value={this.state.select} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />

                
            
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        No editable:
                        <input type="text" value="hi" />
                    </label>
                    <label>
                        Editable:
                        <input type="text" value={null} />
                    </label>
                    <input type="submit" value="Submit" />
                    <textarea> Hello there, this is some text in a text area </textarea>
                    <label>
                        <select>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option selected value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                </form>
            </div>
        );
    }
}
/*
function App() {
    const students = [
        {
            dni: 21856785,
            name: 'Joe',
            lastName: 'Dalton'
        },
        {
            dni: 38958123,
            name: 'Maria',
            lastName: 'Dalton'
        },
        {
            dni: 12345678,
            name: 'Michel',
            lastName: 'Dalton'
        }
    ];
    const ListStudents = students.map((student, index) =>{
      return <li key={student.dni}>{student.lastName}{' '}{student.name}</li>
  });
  return (
      <div className="App">
          {ListStudents}
      </div>
  );
  }
*/
/*
function App() {
  const students = ['Joe', 'Maria', 'Michel'];
  const ListStudents = students.map((student, index) =>{
    return <li key={index}>{student}</li>
});
return (
    <div className="App">
        {ListStudents}
    </div>
);
}
*/
export default App;
