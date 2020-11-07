import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import store from './state.js';


let reRenderEntireTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App
            state={state}
            addTask={store.addTask.bind(store)}
            updateNewTaskText={store.updateNewTaskText.bind(store)}
         />
      </React.StrictMode>,
      document.getElementById('root')
   );
}

reRenderEntireTree(store.getState());
store.subscribe(reRenderEntireTree);
// reportWebVitals();
