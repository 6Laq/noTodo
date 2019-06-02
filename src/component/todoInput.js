import React from 'react'
import PropTypes from 'prop-types';



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
  }

  onChange(e) {
    const value = e.target.value
    this.setState({newTodoValue: value})
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <input value={this.state.newTodoValue} onChange={this.onChange}/>
      </form>
    )
  }
}


TodoInput.propTypes = {
  newTodo: PropTypes.func
}