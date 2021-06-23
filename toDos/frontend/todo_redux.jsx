import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import {receiveTodos, receiveTodo, removeTodo} from './actions/todo_actions';
import Root from './components/root';
import rootReducer from './reducers/root_reducer';
import { allTodos } from './reducers/selectors'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root)
    window.store = store;
    window.allTodos = allTodos;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
})
