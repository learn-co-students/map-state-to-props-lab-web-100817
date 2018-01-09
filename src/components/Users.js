import React, { Component } from "react";
import { connect } from "react-redux";

export class Users extends Component {
  render() {
    let user = this.props.users.map(user => {
      return <li>{user.userName}</li>;
    });
    return (
      <div>
        <ul>{user}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users, primaryUser: state.users[0] };
};

export const ConnectedUsers = connect(mapStateToProps)(Users);
