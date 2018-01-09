import React, { Component } from "react";
import { connect } from "react-redux";

export class Users extends Component {
  render() {
    let users = this.props.users.map((user, index) => (
      <li key={index}>{user.userName}</li>
    ));
    // console.log(users)
    // console.log("connectedUsers", this.props);
    return (
      <div>
        <ul>{users}</ul>
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

export const ConnectedUsers = connect(mapStateToProps)(Users); // aren't we supposed to be connecting something around here?
