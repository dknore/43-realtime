import React, { Component, Fragment } from 'react';
import socket from './socket-context';

export default class ChatDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      isEditing: false,
    };
  }

  componentDidMount() {
    socket.on('initial-chat-info', (allChatInfo) => {
      console.log('display got info', socket.id, allChatInfo);
      this.setState({ chats: allChatInfo.chats });
    });

    socket.on('single-chat-info', (singleChatInfo) => {
      console.log('display got info', socket.id, singleChatInfo);
       const newArr = [...this.state.chats];
       newArr.push(singleChatInfo);
      this.setState({ chats: newArr });
    });
  }

  render() {
    if (this.isEditing === false) {
      return null;
    }
    return <ul>
      {this.state.chats.map((chatInfo, index) => {
        return <li key={index}>{chatInfo.id}: {chatInfo.msg}</li>;
      })}
    </ul>;
  }
}