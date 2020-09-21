import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  onSend = (message) => {
    const mes = {
      text: message,
      role: 'CUSTOMER',
      tags: ['Customer'],
    };
    const answerList = [];
    answersData.forEach((answer) => {
      answer.tags.every((tag) => {
        if (message.includes(tag)) {
          answerList.push(answer);
          return false;
        }
        return false;
      });
      // for (let tag of answer.tags){
      //   if(message.includes(tag)){
      //    answerList.push(answer);
      //      }
      // }
    });
    this.setState((state) => ({
      messages: state.messages.concat(mes, answerList),
    }));
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput onSend={this.onSend} />
      </main>
    );
  }
}

export default Chat;
