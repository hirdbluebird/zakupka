import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../Redux/Actions/simpleAction';
import { Route, Switch } from "react-router-dom";

import Edit from './Edit';
import New from './New';
import Profile from './Profile';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

class User extends Component {

  simpleAction = (event) => {
   this.props.simpleAction();
  }

  render() {

    return (
      <Switch>
        <Route
          exact
          path={`${this.props.match.url}/new`}
          component={New}
        />
        <Route
          path={`${this.props.match.url}/:id`}
          component={Edit}
        />
      </Switch>
    );
  }
}
// <div className="App">
// <Route
// path={`${this.props.match.url}/:id`}
// component={Edit}
// />
// <Route path="/users" component={User} />

export default connect(mapStateToProps, mapDispatchToProps)(User);
