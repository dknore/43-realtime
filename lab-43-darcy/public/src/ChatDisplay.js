import React, { Component, Fragment } from 'react';
import socket from './socket-context';

export default class ChatDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: []
    };
  }

  componentDidMount() {
    socket.on('chat-info', (info) => {
      console.log('display got info', socket.id, info);
      const newArr = [...this.state.chats];
      newArr.push(info);
      this.setState({ chats: newArr });
      console.log(newArr);
    });
  }

  render() {
    return <ul>
      {this.state.chats.map((chatInfo, index) => {
        return <li key={index}>{chatInfo.id}: {chatInfo.msg}</li>;
      })}
    </ul>;
  }
}