import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
      btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes=['red']
    } 
    if (props.persons.length <= 1) {  //classes=['red','bold']
      assignedClasses.push(classes.bold);
  }
    return(
        <div className = {classes.Cockpit}>
        <h1> Hi, this is React </h1>
          <p className={assignedClasses.join(' ')} > Starting to learn React :o </p>
          <button
            className ={btnClass}
            //onClick={this.switchNameHandler.bind(this,'RupChi')}> Switch Name 
            onClick={props.clicked}> Toggle Persons </button>
        </div>
    );
};

export default cockpit;