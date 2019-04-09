import React, { Component } from 'react';
import './App.css';
// import SimpleForm from './forms/SimpleForm'
import SignupForm from './forms/SignupForm'
class App extends Component {
  render() {
    return (
      <div className="App">
        <SignupForm />
      </div>
    );
  }
}

export default App;
