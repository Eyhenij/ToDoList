import { React, Component } from "react";
import './App.css';
import arrListData from './state';
import ListItem from './components/ListItem/ListItem.jsx'


class App extends Component {
    constructor() {
        super();
        this.state = { ToDoItem: arrListData }
    }

    handleChange = (id) => {
        const index = this.state.ToDoItem.map(i => i.id).indexOf(id);
        this.setState(state => {
            let { ToDoItem } = state;
            ToDoItem[index].completed = true;
            return ToDoItem;
        })
    }

    render() {
        const { ToDoItem } = this.state;
        const activeTasks = ToDoItem.filter(task => task.completed === false);
        const completedTasks = ToDoItem.filter(task => task.completed === true);
        const finalTasks = [...activeTasks, ...completedTasks].map(i => {
            return (
                <ListItem
                    key={i.id}
                    description={i.description}
                    completed={i.completed}
                    handleChange={() => { this.handleChange(i.id) }}
                />
            )
        });
        return (
            <div className='list__item'>
                {finalTasks}
            </div>
        );
    }
}

export default App;
