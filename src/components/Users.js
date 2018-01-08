import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {
  render() {
    const users = this.props.store.getState().users.map(user => {
      return (
        <li>
          {user.userName} from {user.hometown}
        </li>
      );
    });
    return (
      <div>
        <h1>Users</h1>
        <ul>{users}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export const ConnectedUsers = connect(mapStateToProps)(Users); // aren't we supposed to be connecting something around here?
