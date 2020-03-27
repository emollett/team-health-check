import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import './App.css';


export default class Start extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      redirect: false
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   const inputValue = event.target.value;
  //   const stateField = event.target.name;
  //   this.setState({
  //     [stateField]: inputValue,
  //   });
  // }

  // async handleSubmit(event) {
  
  //   event.preventDefault();
  //   const { name } = this.state;
  //   let self = this;
  //   await axios.post(
  //     process.env.REACT_APP_API_URL,
  //     { key1: `${name}` }
  //   ).then(function (response) {
  //     // handle success
  //     console.log(response);
  //     self.setState({ redirect: true });
  //   }).catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });
  // }

  render() {

    // if(this.state.redirect) {
    //   return <Redirect to="/" />
    // }

    return (

      <div>
        <h2>You team is </h2>
      </div>
    );
  }
}