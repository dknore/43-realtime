import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

// import ClickClicker from './ClickClicker.js';
// import ClickDisplay from './ClickDisplay.js';
import ChatEntry from './ChatEntry.js';
import ChatDisplay from './ChatDisplay.js';

class App extends Component {
  render() {
    return <Fragment>
      <h1>Welcome to my socket app!</h1>
      <p>Let's chat</p>
      {/* <ClickClicker />
      <ClickDisplay />
      <p>The current time is: {this.state.currentTime} </p> */}
      <ChatEntry />
      <ChatDisplay />
    </Fragment>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);