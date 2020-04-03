import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import AccountDetails from './components/AccountDetails';
import AddAccounts from './components/AddAccounts';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/newaccount" component={AddAccounts} />
              <Route path="/account/:post_id" component={AccountDetails} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  };
};

export default connect(mapStateToProps)(App);
