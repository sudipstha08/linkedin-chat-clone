import React, { useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import HomePage from './containers/HomePage'
import LoginPage from './containers/LoginPage'
import MyNetworkPage from './containers/MyNetworkPage'
import MessagingPage from './containers/MessagingPage'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/my-network" component={MyNetworkPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/messaging" component={MessagingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
