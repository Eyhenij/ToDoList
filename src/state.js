let reRenderEntireTree = () => {
   console.log('state изменился');
}

let state = {

   arrListData: [
      { id: 0, description: 'Сходить в магазин', completed: false },
      { id: 1, description: 'Помыть кота', completed: false },
      { id: 2, description: 'закончить тестовое задание', completed: false },
      { id: 3, description: 'Подготовить презентацию', completed: false },
      { id: 4, description: 'Посмотреть 100 лекций по react', completed: false }
   ],

   newTaskText: 'Please, write your new task'

}

export const addTask = () => {
   let newTask = {
      id: 5,
      description: state.newTaskText,
      completed: false
   };
   state.arrListData.push(newTask);
   state.newTaskText = '';
   reRenderEntireTree(state);
}

export const updateNewTaskText = (updateTask) => {
   state.newTaskText = updateTask;
   reRenderEntireTree(state);
}

export const subscribe = (observer) => {
   reRenderEntireTree = observer;
}

export default state;