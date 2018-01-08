import React, { Component } from "react";
import { connect } from "react-redux";

export class Users extends Component {
  users = () => {
    return this.props.users.map(user => <h1>{user.userName}</h1>);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <ul>{/* stuff should happen around here */}</ul>
        <h1>{this.users()}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    primaryUser: state.users[0]
  };
};

let ConnectedUsers = connect(mapStateToProps)(Users);

module.exports = {
  ConnectedUsers,
  Users
};
