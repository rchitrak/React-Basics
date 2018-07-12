import React from 'react';
import Radium, { StyleRoot } from 'radium';
const cockpit = (props) => {

    const classes = [];
    if (props.persons.length <= 2)
      classes.push('red'); //classes=['red']
    if (props.persons.length <= 1)   //classes=['red','bold']
      classes.push('bold');

    return(
        <div>
        <h1> Hi, this is React </h1>
          <p className={classes.join(' ')} > Starting to learn React :o </p>
          <button
            style={style}
            //onClick={this.switchNameHandler.bind(this,'RupChi')}> Switch Name 
            onClick={this.togglePersonHandler}> Toggle Persons </button>
        </div>
    );
}

export default Radium(cockpit);