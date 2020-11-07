let store = {

   _state: {

      arrListData: [
         { id: 0, description: 'Сходить в магазин', completed: false },
         { id: 1, description: 'Помыть кота', completed: false },
         { id: 2, description: 'закончить тестовое задание', completed: false },
         { id: 3, description: 'Подготовить презентацию', completed: false },
         { id: 4, description: 'Посмотреть 100 лекций по react', completed: false }
      ],

      newTaskText: 'Please, write your new task'

   },

   _callSubscriber() {
      console.log('state изменился');
   },

   getState() {
      return (this._state);
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },

   _addTask() {
      let newTask = {
         id: 5,
         description: this._state.newTaskText,
         completed: false
      };
      this._state.arrListData.push(newTask);
      this._state.newTaskText = '';
      this._callSubscriber(this._state);
   },

   _updateNewTaskText(updateTask) {
      this._state.newTaskText = updateTask;
      this._callSubscriber(this._state);
   },


   dispatch(action) {
      if (action.type === 'ADD-TASK') {
         return (this._addTask())
      } else if (action.type === 'UPDATE-NEW-TASK-TEXT') {
         // return (this._updateNewTaskText(action.updateTask))

         this._state.newTaskText = action.updateTask;
         this._callSubscriber(this._state);

      }
   }
}

export default store;