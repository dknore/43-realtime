import React, {Component, Fragment} from 'react';
import socket from './socket-context';

const uuidv4 = require('uuidv4');

export default class ChatEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv4(),
      msg: '',
    };
  }

  updateValue = (event) => {
    event.preventDefault();
    this.setState({
      msg: event.target.value
    });
  }

  sendChat = () => {
    console.log('client chatted');
    socket.emit('send-chat', {
      id: this.state.id,
      msg: this.state.msg
    });
  }

  componentDidMount() {
    console.log('socket id', socket.id);
  }

  render() {
    return <Fragment>
      <p>
      <input
        name="msg"
        type="text"
        placeholder="Message"
        required="true"
        value={this.state.msg}
        onChange={this.updateValue}
      />
        <button onClick={this.sendChat}>Send Chat</button>
      </p>
    </Fragment>;
  }
}