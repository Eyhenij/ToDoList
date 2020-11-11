// const { createStore, combineReducers } = require("redux");
import { createStore, combineReducers } from 'redux';
import tasksReducer from './tasksReducer'

let reducers = combineReducers({
   listData: tasksReducer
});

let store = createStore(reducers);

export default store;