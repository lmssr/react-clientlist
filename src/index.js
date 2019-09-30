import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";
import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Luc Mosser" },
      { id: 2, nom: "Leo Beltran" },
      { id: 3, nom: "Younes Kamel" },
      { id: 4, nom: "Nicolas Fraisse" }
    ]
  };

  handleDelete = id => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(function(client) {
      return client.id === id;
    });
    clients.splice(index, 1);

    this.setState({ clients: clients });
  };

  handleAdd = client => {
    const clients = this.state.clients.slice();
    clients.push(client);

    this.setState({ clients });
  };

  render() {
    const title = "List of Clients";

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(client => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
