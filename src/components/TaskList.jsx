import React from 'react';
// import './taskList.module.css';
import ListItem from './ListItem/ListItem.jsx'

const TaskList = (props) => {

   let ToDoItem = props.state.arrListData.map(i => {
      return (
         <div>
            <ListItem
               key={i.id}
               description={i.description}
               completed={i.completed}
            />
         </div>
      );
   }
   );

   return (
      <div>
         {ToDoItem}
      </div>
   );
}

export default TaskList;