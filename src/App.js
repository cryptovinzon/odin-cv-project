import React, { Component } from "react";
import './App.css';
import uniqid from "uniqid";
import Form from "./Components/Form";
// import Form from "./Components/Education";

// import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: {
        name: '',
        email: '',
        phone: ''
      },
      education: {
        id: uniqid(),
        school: '',
        major: '',
        yearCompleted: ''
      },
      experience: {
        id: uniqid(),
        company: '',
        position: '',
        tasks: '',
        yearStarted: '',
        yearCompleted: '',
      },
      educationArray: [],
      experienceArray: []
    }
  }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value
  //   this.setState({
  //     ...this.state,
  //     [e.target.name]: value
  //   })
  // }

  render () {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
