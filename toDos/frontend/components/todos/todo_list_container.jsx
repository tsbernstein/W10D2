import React from 'react';
import { connect } from "react-redux";
import TodoList from "./todo_list";
import { allTodos } from "../../reducers/selectors"
import { receiveTodo, receiveTodos } from '../../actions/todo_actions';

const mSTP = state => {
  debugger
  return {
    todos: allTodos(state)
  };
}

// const mSTP = state => {
//   debugger
//   return {};
// }

const mDTP = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});


export default connect(mSTP, mDTP)(TodoList);