import React from 'react';
import TodoInput from './component/todoInput'
import TodoList from './component/todoList'
import TodoHeader from './component/todoHeader'
import './App.css'


class App extends React.Component {
  constructor() {
    super()
    this.newTodo = this.newTodo.bind(this)
    this.state = {todos: []}
  }

  newTodo(newTodoValue) {
    const currentTodos = this.state.todos
    this.setState({todos: [...currentTodos, {name: newTodoValue, complete: false}]})
  }

  render(){
  return (
    <div className="App">
      <TodoHeader />
      <br />
      <TodoList todos={this.state.todos}/>
      <TodoInput newTodo={this.newTodo}/>
    </div>
  );
}
}

export default App;
