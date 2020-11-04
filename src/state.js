import ListItem from './components/ListItem/ListItem';


const listData = [
   { id: 0, description: 'Сходить в магазин', completed: false },
   { id: 1, description: 'Помыть кота', completed: false },
   { id: 2, description: 'закончить тестовое задание', completed: false },
   { id: 3, description: 'Подготовить презентацию', completed: false },
   { id: 4, description: 'Посмотреть 100 лекций по react', completed: false }
];

const handleChange = id => {
   console.log('Значение изменилось', id);
}
const ToDoItem = listData.map(i => {
   return (
      <ListItem
         key={i.id}
         description={i.description}
         completed={i.completed}
         handleChange={() => { handleChange(i.id) }}
      />
   )
}
);

export default ToDoItem;