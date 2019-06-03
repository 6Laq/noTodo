import React from 'react'
import './styles/todoHeader.css'

const today = new Date();
let options = { weekday:'long', month:'short', day:'numeric'};

class Header extends React.Component {
  
  
  
  render(){
    return(
      <div className="header">
        dateElement.innerHTML = today.toLocaleDateString('en-US', options);
        <h2>Date</h2>
      </div>
    )
  }
}



export default Header;