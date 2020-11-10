import React from "react";
import './App.css';
import TaskList from './components/TaskList.jsx'
import { addTaskActionCreator, updateNewTaskActionCreator } from './redux/tasksReducer';


const App = (props) => {

    let newTaskElement = React.createRef();
    const addTask = () => {
        props.dispatch(addTaskActionCreator());
    }

    let onTaskChange = (event) => {
        let taskText = event.target.value;
        props.dispatch(updateNewTaskActionCreator(taskText));
    }

    return (
        <div className='list'>
            <div className='list__item'>
                <TaskList state={props.state} />
            </div>
            <div>
                <textarea
                    value={props.state.newTaskText}
                    placeholder='please, enter your message'
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
