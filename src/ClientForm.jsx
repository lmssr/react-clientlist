import React, { Component } from "react";

class ClientForm extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.nouveauClient}
          onChange={this.handleChange}
          type="text"
          placeholder="Hello"
        />
        <button>Ok</button>
      </form>
    );
  }
}

export default ClientForm;
