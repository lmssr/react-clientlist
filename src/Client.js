import React, { Component } from "react";

class Client extends Component {
  render() {
    <li>
      {this.props.details.nom}{" "}
      <button onClick={() => this.props.onDelete(this.props.details.id)}>X</button>
    </li>;
  }
}

export default Client;
