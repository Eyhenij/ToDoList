import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './state.js';
import { addTask } from './state';


ReactDOM.render(
  <React.StrictMode>
    <App
      state={state}
      addTask={addTask}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
