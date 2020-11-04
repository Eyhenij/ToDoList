import React from "react";
import './App.module.css';
import ListItem from "./components/toDoItem/toDoItem.jsx";

const App = () => {
    return (
        <div className='App'>
            <header className='App - header'>
                <div>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
            </header>
        </div>
    );
}

export default App;
