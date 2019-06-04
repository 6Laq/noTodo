import React from 'react'
import PropTypes from 'prop-types';
import "./styles/todoInput.css"



export default class TodoInput extends React.Component{

  constructor(){
    super()

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {newTodoValue: ''}
  }


  onSubmit(e){
    e.preventDefault()
    this.props.newTodo(this.state.newTodoValue)
    this.setState({
      newTodoValue: ''
    })
  }

  onChange(e) {
    const value = e.target.value
    this.setState({newTodoValue: value})
  }

  render(){
    return(
      <div className="Form">
        <button />
        <form onSubmit={this.onSubmit}>
          <input 
            value={this.state.newTodoValue} 
            onChange={this.onChange}
            placeholder="Add To List"
          />
        </form>
      </div>
      
    )
  }
}


TodoInput.propTypes = {
  newTodo: PropTypes.func
}