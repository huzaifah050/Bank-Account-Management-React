import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Account from './Account';

class DisplayAccounts extends Component {
  render() {
    return (
      <div>
        <div className="display">
          <h3>User Accounts</h3>
          <Link to="/newaccount">
            <div className="addbutton">
              <i className="pen fa fa-pencil" aria-hidden="true"></i>
            </div>
          </Link>
        </div>
        <Account />
      </div>
    );
  }
}

export default DisplayAccounts;
