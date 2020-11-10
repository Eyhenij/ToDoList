import tasksReduser from './redux/tasksReducer'

let store = {

   _state: {

      arrListData: [
         { id: 0, description: 'Сходить в магазин', completed: false },
         { id: 1, description: 'Помыть кота', completed: false },
         { id: 2, description: 'закончить тестовое задание', completed: false },
         { id: 3, description: 'Подготовить презентацию', completed: false },
         { id: 4, description: 'Посмотреть 100 лекций по react', completed: false }
      ],

      newTaskText: ''

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

   dispatch(action) {
      this._state = tasksReduser(this._state, action)
      this._callSubscriber(this._state);
   }
}

export default store;