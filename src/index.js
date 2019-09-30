import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Luc Mosser" },
      { id: 2, nom: "Leo Beltran" },
      { id: 3, nom: "Younes Kamel" },
      { id: 2, nom: "Leo Beltran" }
    ],

    nouveauClient: ""
  };

  handleDelete = id => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(function(client) {
      return client.id === id;
    });
    clients.splice(index, 1);

    this.setState({ clients: clients });
  };

  handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    const client = { id: id, nom: nom };

    const clients = this.state.clients.slice();
    clients.push(client);

    this.setState({ clients: clients });
  };

  handleChange = event => {
    event.preventDefault();
    const value = event.currentTarget.value;
    this.setState({ nouveauClient: value });
    console.log(event.currentTarget.value);
  };

  render() {
    const title = "List of Clients";

    const elements = this.state.clients.map(client => (
      <li>
        {client.nom}{" "}
        <button onClick={() => this.handleDelete(client.id)}>X</button>
      </li>
    ));
    return (
      <div>
        <h1>{title}</h1>
        {this.state.compteur}

        <ul>{elements}</ul>

        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.nouveauClient}
            onChange={this.handleChange}
            type="text"
            placeholder="Hello"
          />
          <button>Ok</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
