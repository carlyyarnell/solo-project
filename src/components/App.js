import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { render } from 'react-dom';
//import link from '/server/entryModel';
import Entry from './Entry';

//let mongoURI = 'mongodb://localhost:27017/solo-project';
class App extends Component {

  // componentDidMount(){
  //   fetch('mongodb://localhost:27017/solo-project')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.log('nah'));
  // }

  // componentDidMount(){
  //   axios.get('localhost:3000/home')
  // }


  render() {
    return (
      <div id= 'head'>
        <h1 id= 'title'>OBSERVATION JOURNAL</h1>
        <h4 id= 'about'>select an existing entry or create a new one</h4>
        <Entry id= 'one'/>
        <Entry id= 'two'/>
        <Entry id= 'three'/>
        <button>create new entry</button>
      </div>
    );
  }
}

// function Form() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('You clicked submit.');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

export default App;