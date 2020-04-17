import React, { Component } from 'react';
import { Home } from './Home';
import DisplayAccounts from './DisplayAccounts';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Home />
        <div className="container">
          <div className="row">
            <div className="col s12 m1"></div>
            <div className="col s12 m10">
              <DisplayAccounts />
            </div>
            <div className="col s12 m1"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
