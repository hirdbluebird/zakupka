import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../../Redux/Actions/simpleAction';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

class New extends Component {

  simpleAction = (event) => {
   this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        New user
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(New);
