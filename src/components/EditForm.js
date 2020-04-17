import React, { Component } from 'react';
import { addAccount, editAccount } from '../sotre/actions';
import { connect } from 'react-redux';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.account.name,
      num: props.account.num,
      holder: props.account.holder,
      description: props.account.description,
      id: uuid(),
    };
    this.id = props.match.params.post_id;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.editAccount(this.id, this.state);
    this.props.history.push('/');
  };

  render() {
    const { account } = this.props;

    console.log(account.name);
    console.log(this.state);

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Account</h5>
          <div className="input-fiel">
            <label htmlFor="name">Account Name</label>
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-fiel">
            <label htmlFor="holder">Account Holder</label>
            <input
              type="text"
              id="holder"
              value={this.state.holder}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-fiel">
            <label htmlFor="description">
              What is the purpose of the account
            </label>
            <textarea
              id="description"
              value={this.state.description}
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="buttons">
            <div className="input-fiel">
              <button className="btn black lighten-1 z-depth-2">Update</button>
            </div>
            <Link to={'/account/' + account.id}>
              <div>
                <button className="btn update-btn">Go Back</button>
              </div>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addAcct: addAccount,
  editAccount: editAccount,
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  console.log(id);

  return {
    account: state.accounts.find((account) => account.id === id),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
