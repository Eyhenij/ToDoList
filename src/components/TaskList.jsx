import React from 'react';
import s from './taskList.module.css';
import ListItem from './ListItem/ListItem.jsx'

const TaskList = (props) => {
   let ToDoItem = props.listData.arrListData.map(i => {
      return (
         <ListItem
            key={i.id}
            description={i.description}
            completed={i.completed}
         />
      )
   }
   );

   return (
      <div>
         {ToDoItem}
      </div>
   );
}

export default TaskList;
