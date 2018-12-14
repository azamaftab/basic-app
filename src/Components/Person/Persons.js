import React, { Component } from 'react';
import Person from './Person';

class Persons extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'John', age: 31 },
      { id: 3, name: 'Fred', age: 35 },
      { id: 4, name: 'Shah', age: 29 }
    ],
    myName: 'parent',
    showPerson: true,
  }

  nameChangeHandler = (event, id) => {
    const pId = this.state.persons.findIndex(i => {
      return i.id === id;
    });
    const person = {
      ...this.state.persons[pId]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[pId] = person;

    this.setState({ persons: persons })

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }
  render() {
    // const test = Object.keys(this.state.persons[2]).map(key => {

    //   console.log(key, [Array(this.state.persons[2][key])])
    // })

    let per = ''
    if (this.state.showPerson) {
      per = (
        <div>
          {
            this.state.persons.map((item, index) => {
              return <Person key={item.id} name={item.name} age={item.age} changed={(event) => { this.nameChangeHandler(event, item.id) }} />
            })
          }
        </div>)
    }
    return (
      <div style={{ marginTop: '15px' }}>
        <button onClick={this.togglePersonHandler} className="btn-primary">Show Person</button>
        {per}
      </div >
    );
  }
}

export default Persons;
