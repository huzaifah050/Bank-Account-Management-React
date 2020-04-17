import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAccount } from '../sotre/actions';
import { Link } from 'react-router-dom';

class AccountDetails extends Component {
  handleDelete = () => {
    this.props.deleteAccount(this.props.match.params.post_id);
    this.props.history.push('/');
  };

  handleEdit = () => {};
  render() {
    const { account } = this.props;
    // console.log(this.props);
    return (
      <div className="container">
        <h2>{account.name}</h2>

        <div className="card">
          <div className="card-content">
            <p>Account Number: {account.num}</p>
            <p className="line">Account: Holder {account.holder}</p>
            <p>{account.description}</p>
          </div>
          <div className="card-tabs">
            <ul className="tabs tabs-fixed-width">
              <li className="tab">
                <a href="#test4">Last three transactions</a>
              </li>
            </ul>
          </div>
          <div className="card-content grey lighten-4">
            <div id="test4">
              <p className="grey-text">{account.pastTransactionA}</p>
            </div>
            <div id="test5">
              <p className="grey-text">{account.pastTransactionB}</p>
            </div>
            <div id="test6">
              <p className="grey-text">{account.pastTransactionC}</p>
            </div>
          </div>
        </div>
       <div className = 'buttons'>
          <Link to="/">
            <button className="btn">Go Back</button>
          </Link>
          <Link to={'/account/edit/' + account.id}>
            <button className="btn blue">Edit Account</button>
          </Link>
          <button className="red btn" onClick={this.handleDelete}>
            DELETE ACCOUNT
        </button>
       </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  const accounts = state.accounts;
  let account;

  for (let i = 0; i < accounts.length; i++) {
    if (id === accounts[i].id) {
      account = accounts[i];
    }
  }
  return {
    account: account,
  };
};

const mapDispatchToProps = {
  deleteAccount: deleteAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
