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
            <div className="col s12 m6">
              <DisplayAccounts />
            
            </div>
            <div className="col s12 m4 offset-m2">Notifs</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
