import React from 'react'; 
import { allTodos } from '../../reducers/selectors';
import TodoListContainer from './todo_list_container';

const DoList = (props) => {
  debugger
  const todosLis = props.allTodos.map( task => {
    return (
      <li key={task.id}> {task.title}</li>
    )
  })
  return (
    <div>
      <h3>Todo List goes here!</h3>
      <ul>
        {todosLis}
      </ul>
    </div>
  )
}

export default DoList