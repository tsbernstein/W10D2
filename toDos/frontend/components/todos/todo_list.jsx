import React from 'react'; 
import TodoForm from './todo_form';
import { allTodos } from '../../reducers/selectors';

const DoList = (props) => {
  const todosLis = props.todos.map( task => {
    return (
      <li key={`${task.id} + ${task.title}`}> {task.title}</li>
    )
  })
  return (
    <div>
      <div>
        <ul>
          {todosLis}
        </ul>
      </div>
      <TodoForm receiveTodo={ props.receiveTodo }/>
    </div>
  )
}

export default DoList