import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import RunList from './runs/RunList';
import RunCreate from './runs/RunCreate';
import RunShow from './runs/RunShow';
import RunEdit from './runs/RunEdit';
import RunDelete from './runs/RunDelete';
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
                {/* <Route path="/runs/:id" exact component={RunShow} /> */}
                <Route path="/runs/edit/:id" exact component={RunEdit} />
                <Route path="/runs/delete/:id" exact component={RunDelete} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
