import React, { Component } from 'react';
import ButtonRegister from './ButtonRegister'

class UserInput extends Component {
    render() {
        return (
            <form className="col-3">
                <input className="form-control" type="text" placeholder="userName" />
              
                <input className="form-control" type="text" placeholder="password" />
               
                <ButtonRegister/>
            </form>
        );
    }
}

export default UserInput;