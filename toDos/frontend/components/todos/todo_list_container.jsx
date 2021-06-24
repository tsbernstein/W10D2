import { connect } from "react-redux";
import TodoList from "./todo_list";
import { allTodos } from "../../reducers/selectors"
import { receiveTodo, receiveTodos } from '../../actions/todo_actions';

const mSTP = state => {
    return {
      todos: allTodos(state),
      state
    }
};

const mDTP = dispatch => {
  return {
    receiveTodo: todo => dispatch(receiveTodo(todo))
  }
};


export default connect(mSTP, mDTP)(TodoList);