import React, { Component } from 'react';
import UserInput from './UserInput';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
            <div className="container">
                <UserInput/>
                
            </div>
        </div>
      
    );
  }
}

export default NavBar;