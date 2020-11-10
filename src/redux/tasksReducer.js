const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEXT';

const tasksReducer = (state, action) => {

   switch (action.type) {
      case ADD_TASK:
         let newTask = {
            id: 5,
            description: state.newTaskText,
            completed: false
         };
         state.arrListData.push(newTask);
         state.newTaskText = '';
         return state;
      case UPDATE_NEW_TASK_TEXT:
         state.newTaskText = action.updateTask;
         return state;
      default:
         return state;
   }
}

export const addTaskActionCreator = () => {
   return {
      type: ADD_TASK
   }
}

export const updateNewTaskActionCreator = (taskText) => {
   return {
      type: UPDATE_NEW_TASK_TEXT,
      updateTask: taskText
   }
}

export default tasksReducer;