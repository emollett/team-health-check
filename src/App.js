import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import Start from './Start.js';
import Team from './Team.js';
// import NewHealthcheck from './NewHealthcheck.js';

function App() {

  return (

    <div>

    <Router>
      <Link to="/"><h1>Team Health Check</h1></Link>
      <div>
        <Route exact path="/" render={(props) => <Home/>} />
        <Route exact path="/start" render={(props) => <Start/>} />
        <Route exact path="/team/:teamName" component={Team} />
        {/* <Route exact path="/new-healthcheck" render={(props) => <NewHealthcheck/>} /> */}
      </div>
    </Router>
    </div>
  );
}

export default App;
