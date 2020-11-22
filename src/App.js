import React from "react";
import './App.css';
import TaskList from './components/TaskList.jsx'
import { addTask, updateNewTask } from './redux/tasksReducer';


const App = (props) => {

    const onAddTask = () => {
        props.dispatch(addTask());
    }
    const onTaskChange = (e) => {
        props.dispatch(updateNewTask(e.target.value));
    }

    return <div className='list'>
        <div className='list__item'>
            <TaskList arrListData={props.listData.arrListData}/>
        </div>
        <div>
            <textarea
                value={props.listData.newTaskText}
                placeholder='please, enter your message'
                onChange={onTaskChange}
            />
        </div>
        <div>
            <button onClick={onAddTask}>Add task</button>
        </div>
    </div>
}

export default App;
