import React from 'react'

export default function TodoItem (props) {
  return (
    <div className="todo">
      <h3>{props.todo.name}</h3>
    </div>
  )
}