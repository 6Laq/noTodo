import React from 'react'
import PropTypes from 'prop-types';
import TodoItem from './todoItem';
import './styles/todoList.css'



export default class TodoList extends React.Component{
  render(){
    return(
      <div className="TodoList">
        {this.props.todos.map(todo => (
          <TodoItem todo={todo} key={todo.name}/>
        ))}
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string, complete: PropTypes.bool}))
}

TodoList.defaultProps = {
  todos: []
}
