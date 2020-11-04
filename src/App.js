import React from "react";
import './App.css';
import ToDoItem from './state';


const App = () => {
    return (
        <div className='list'>
            <div className='list__item'>
                {ToDoItem}
            </div>
        </div>
    );
}

export default App;
