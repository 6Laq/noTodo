import React from 'react'
import './styles/todoHeader.css'



class Header extends React.Component {
  constructor () {
    super()

    this.state = new Date();
  }

  render(){
    return(
      <div className="header">
        <h2>Date</h2>
      </div>
    )
  }
}



export default Header;