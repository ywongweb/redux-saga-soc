import React from 'react';
import { connect } from "react-redux";
import * as actions from '../actions';

class UserProfile extends React.PureComponent {
  onClick = e => {
    e.preventDefault()
    this.props.fetch_user_request()
  }

  render() {
    return (
      <div>
        <p>Number of repos: {this.props.user.repos}</p>
        <button
          style={{
            width: '140px',
            height: '40px',
            border: '1px solid red'
          }}
          onClick={this.onClick}>
          Get User Profile
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, actions)(UserProfile)