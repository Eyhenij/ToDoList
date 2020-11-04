import React from "react";
import './App.css';
import arrListData from './state';
import ListItem from './components/ListItem/ListItem.jsx'


const App = () => {

    const handleChange = (id) => {
        console.log('Значение изменилось', id);
    }


    const ToDoItem = arrListData.map(i => {
        return (
            <ListItem
                key={i.id}
                description={i.description}
                completed={i.completed}
                handleChange={() => { handleChange(i.id) }}
            />
        )
    }
    );

    return (
        <div className='list'>
            <div className='list__item'>
                {ToDoItem}
            </div>
        </div>
    );
}

export default App;
