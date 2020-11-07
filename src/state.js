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

   getState() {
      return (this._state);
   },

   callSubscriber() {
      console.log('state изменился');
   },

   addTask() {
      let newTask = {
         id: 5,
         description: this._state.newTaskText,
         completed: false
      };
      this._state.arrListData.push(newTask);
      this._state.newTaskText = '';
      this.callSubscriber(this._state);
   },

   updateNewTaskText(updateTask) {
      this._state.newTaskText = updateTask;
      this.callSubscriber(this._state);
   },

   subscribe(observer) {
      this.callSubscriber = observer;
   }

}

export default store;