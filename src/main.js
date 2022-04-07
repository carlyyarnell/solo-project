import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './components/App';

import styles from './styles.css';


// render(
//   <h1>car's lil app</h1>,
//   document.getElementById('root')
// );

render(
  <div>
   <App />
  </div>,
  document.getElementById('root')
)

// render(
//   <div>
//     <h1>car's lil app</h1>
//     <p>this is my app, it had really big aspirations but fell short</p>
//     <h2>this should be a journal entry</h2>
//     <button>create new entry</button>
//   </div>,
//   document.getElementById('root')
// )

// render(
//   // <BrowserRouter>
//     <App />,
//   /* </BrowserRouter>, */
//   document.getElementById('root'),
// );

