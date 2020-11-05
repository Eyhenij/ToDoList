import React from "react";
import './App.css';
import TaskList from './components/TaskList.jsx'


const App = (props) => {

    let newTaskElement = React.createRef();
    const addTask = () => {
        props.addTask();
    }

    let onTaskChange = () => {
        let taskText = newTaskElement.current.value;
        props.updateNewTaskText(taskText);
    }

    return (
        <div className='list'>
            <div className='list__item'>
                <TaskList state={props.state} />
            </div>
            <div>
                <textarea
                    ref={newTaskElement}
                    value={props.state.newTaskText}
                    onChange={onTaskChange}
                />
            </div>
            <div>
                <button onClick={addTask}>Add task</button>
            </div>
        </div>
    );
}

export default App;
