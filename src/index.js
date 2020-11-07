import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import state from './state.js';
import { updateNewTaskText, addTask, subscribe } from './state';


let reRenderEntireTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App
            state={state}
            addTask={addTask}
            updateNewTaskText={updateNewTaskText}
         />
      </React.StrictMode>,
      document.getElementById('root')
   );
}

reRenderEntireTree(state);
subscribe(reRenderEntireTree);
// reportWebVitals();
