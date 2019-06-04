import React from 'react'
import "./styles/todoItem.css"

export default function TodoItem (props) {


  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  
  return (
    <div className="todo">
      <div className="completeBtn">
        <a href="/" onClick={handleClick}>
          complete
        </a>
      </div>
      <div className="item">
        {props.todo.name}
        <button onClick={handleClick}/>
      </div>
        
        
    </div>
  )
}

