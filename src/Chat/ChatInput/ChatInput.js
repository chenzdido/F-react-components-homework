import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mes: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      mes: event.target.value,
    });
  };

  handleSubmit = () => {
    this.props.onSend(this.state.mes);
    console.log(this.state.mes);
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.handleChange} />
        <button type="button" onClick={this.handleSubmit}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
