import React, { Component } from 'react';
import { addAccount } from './../sotre/actions';
import { connect } from 'react-redux';
import uuid from 'react-uuid';

class AddAccounts extends Component {
  state = {
    name: '',
    num: '',
    holder: '',
    description: '',
    id: uuid()
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addAcct(this.state);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Account</h5>
          <div className="input-field">
            <label htmlFor="name">Account Name</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="holder">Account Holder</label>
            <input type="text" id="holder" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="description">
              What is the purpose of the account
            </label>
            <textarea
              id="description"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn black lighten-1 z-depth-2">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addAcct: addAccount
};

export default connect(null, mapDispatchToProps)(AddAccounts);
