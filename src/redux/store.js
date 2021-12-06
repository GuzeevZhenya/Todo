import { createStore, combineReducers } from 'redux';
import reducerTodo from './todoReducer';


const reducers = combineReducers({ reducerTodo })

const store = createStore(reducers);

export default store;