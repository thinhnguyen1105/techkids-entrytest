import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar';
import axios from 'axios';

class App extends Component {

  state = {
    users: []
  };


  componentDidMount() {
    axios
      .get("/api/users")
      .then(data => {
        console.log(data.data);
        this.setState({ images: data.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
          <NavBar/>
      </div>
    );
  }
}

export default App;
