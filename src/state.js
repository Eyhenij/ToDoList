let state = {

   arrListData: [
      { id: 0, description: 'Сходить в магазин', completed: false },
      { id: 1, description: 'Помыть кота', completed: false },
      { id: 2, description: 'закончить тестовое задание', completed: false },
      { id: 3, description: 'Подготовить презентацию', completed: false },
      { id: 4, description: 'Посмотреть 100 лекций по react', completed: false }
   ]

}
export default state;

export let addTask = (taskText) => {
   let newTask = {
      id: 5,
      description: taskText,
      completed: false
   };

   state.arrListData.push(newTask);
}