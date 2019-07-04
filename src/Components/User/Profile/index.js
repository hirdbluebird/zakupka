import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { simpleAction } from './Redux/Actions/simpleAction';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  // simpleAction: () => dispatch(simpleAction())
})

class Profile extends Component {

  simpleAction = (event) => {
   this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        Profile
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
