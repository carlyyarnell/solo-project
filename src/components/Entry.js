import React, { Component } from 'react';
import { render } from 'react-dom';

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = 
    //{ buttonVal: '-'};
    {
      page: {
        // location: '',
        // date: '',
        // notes: '',
      }
    };
    //this.changeButtonVal = this.changeButtonVal.bind(this);
  }

  render() {
    return (
      <div id= 'inputs'>
        <div id= 'first'>Location:  </div>
        <div id= 'second'>Date:  </div>
        <div id= 'third'>Notes:  </div>
        {/* <h3>entry</h3> */}
        {/* <div>here</div> */}
      </div>
    )
  }
}



export default Entry;