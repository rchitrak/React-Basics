import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: '1', name: 'Rup', age: 25 },
        { id: '2', name: 'Ealisha', age: 24 },
        { id: '3', name: 'Chitrak', age: 23.5 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
}

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()' );
  }
  // state = {
  //   persons: [
  //     { id: '1', name: 'Rup', age: 25 },
  //     { id: '2', name: 'Ealisha', age: 24 },
  //     { id: '3', name: 'Chitrak', age: 23.5 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] inside render()');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle = {this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
