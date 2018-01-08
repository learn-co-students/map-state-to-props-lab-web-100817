import React, { Component } from 'react';
import { addUser } from '../actions/users';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      hometown: ''
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch(addUser(this.state));
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={event => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={event => this.handleChange(event)}
            placeholder="user name"
          />
        </p>
        <p>
          <input
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={event => this.handleChange(event)}
            placeholder="hometown"
          />
        </p>
        <input type="submit" />
      </form>
    );
  }
}

export default UserInput;
