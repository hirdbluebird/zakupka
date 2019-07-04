import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './Redux/Actions/simpleAction';
import { Redirect, Link, Route, Switch } from "react-router-dom";

import MainPage from './Components/MainPage';
import User from './Components/User';
import './App.css';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

class App extends Component {

  simpleAction = (event) => {
   this.props.simpleAction();
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <header>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users/new">New user</Link>
            </li>
          </ul>
        </header>

        <div style={{marginTop: '50px'}}>
          <Route exact path='/' component={MainPage} />
          <Route path='page/:page' render={() => (<p>page</p>)} />
          <Route path="/users" component={User} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
