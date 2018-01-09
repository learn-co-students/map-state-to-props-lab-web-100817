import React, { Component } from "react";
import UserInput from "./components/UserInput";
import { ConnectedUsers } from "./components/Users";
import { connect } from "react-redux";

export class App extends Component {
  render() {
    console.log("app", this.props.store);
    return (
      <div className="App">
        <UserInput store={this.props.store} />
        <ConnectedUsers />
      </div>
    );
  }
}
export default App;
