import React, { Component } from 'react';
import { Link, useParams } from "react-router-dom";
import './App.css';

export default class Team extends Component{
  render(){

    let teamName = this.props.match.params.teamName;

    return (
  
      <div>
        <h2>Team name is {teamName}</h2>
        <Link to="/new-healthcheck">Create a healthcheck</Link>
      </div>
  
    );

  }
}
