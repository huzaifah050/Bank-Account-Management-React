import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Account extends Component {
  render() {
    const accountList = this.props.accounts ? (
      this.props.accounts.map(account => {
        return (
          <div className="card z-depth-3" key={account.id}>
            <div className="card-content">
              <Link to={'/account/' + account.id}>
                <span className="card-title">{account.name}</span>
              </Link>
              <p>{account.description}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div>You have no account here</div>
    );
    return <div className="container">{accountList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  };
};

export default connect(mapStateToProps)(Account);
