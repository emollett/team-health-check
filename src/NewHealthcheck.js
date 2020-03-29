import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import './App.css';


export default class NewHealthcheck extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      metric1: '',
      metric2: '',
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
  }

  async handleSubmit(event) {
  
    event.preventDefault();
    const { name, metric1, metric2 } = this.state;
    let self = this;
    await axios.post(
      process.env.REACT_APP_CREATE_HEALTHCHECK_METRIC_API_URL,
      { key1: `${name}, ${metric1}, ${metric2}` }
    ).then(function (response) {
      // handle success
      console.log(response);
      self.setState({ redirect: true });
    }).catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  render() {

    if(this.state.redirect) {
      return <Redirect to={`/team/${this.state.name}`} />
    }

    return (

      <div>
        <h2>Enter the metrics you want to track</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Metric 1:</label>
          <input
            type="text"
            name="metric1"
            onChange={this.handleChange}
            value={this.state.metric1}
          />

          <label>Metric 2:</label>
          <input
            type="text"
            name="metric2"
            onChange={this.handleChange}
            value={this.state.metric2}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}