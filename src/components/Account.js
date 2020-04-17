import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Account extends Component {
  render() {
    const accountList = this.props.accounts ? (
      this.props.accounts.map((account) => {
        return (
          <Link to={'/account/' + account.id} key={account.id}>
            <div>
              <ul className="collection">
                <li className="collection-item avatar">
                  <i className="material-icons circle pink">
                    {account.name[0].toUpperCase() +
                      account.name[1].toUpperCase()}
                  </i>
                  <span className="title title-text">{account.name}</span>
                  <p className="description-text">
                    {account.description} <br />
                  </p>
                </li>
              </ul>
            </div>
          </Link>
        );
      })
    ) : (
      <div>You have no account here</div>
    );
    return <div className="container">{accountList}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

export default connect(mapStateToProps)(Account);
