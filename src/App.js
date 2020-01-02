import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home/'
import './App.css';

class App extends React.Component {

  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </Router>
    )
  };
}

export default App;
