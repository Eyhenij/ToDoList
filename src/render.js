import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addTask } from './state.js';
import { updateNewTaskText } from './state';

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



export default reRenderEntireTree;