import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../../Redux/Actions/simpleAction';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  // simpleAction: () => dispatch(simpleAction())
})

class Edit extends Component {

  simpleAction = (event) => {
   this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        {`${this.props.match.params.id}`}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
