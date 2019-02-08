import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import RunList from './runs/RunList';
import RunCreate from './runs/RunCreate';
import history from '../history';
import '../styles/styles.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history={history}>
          <div>
            <Header />
            <div className="container main">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/runs" exact component={RunList} />
                <Route path="/runs/create" exact component={RunCreate} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
