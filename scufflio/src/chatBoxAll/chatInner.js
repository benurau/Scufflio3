import React, { Component, useContext } from "react";
import socket from "../socket";

export default class ChatComposer extends Component {
  
    

    handleSubmit = event => {
        event.preventDefault();
        socket.emit('fromGuess',this.state.new)
        this.setState({
            new: ""
        });
        };  

    state = {
        new: ""
    };

  handleCompose = event => {
    let typedValue = event.target.value;
    if (typedValue !== "" && typedValue !== " ") {
      this.setState({
        new: event.target.value
      });
    }
  };

  render() {
    return (
      <div className="chat-composer">
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            placeholder="loser"
            onChange={this.handleCompose}
            value={this.state.new}
          />
        </form>
      </div>
    );
  }
}
