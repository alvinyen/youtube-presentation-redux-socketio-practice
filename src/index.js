import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount = () => {
    this.socket = io('/');
    this.socket.on('message', (message) => {
      this.setState({ messages: [...this.state.messages, message] });
    });
  }

  handleSubmit = (event) => {
    const body = event.target.value;
    if(event.keyCode === 13 && body){
      const message = {
        from: 'Me',
        body
      };
      this.setState({ messages: [...this.state.messages ,message] });
      this.socket.emit('message', body);
      event.target.value = '';
    }
  }

  render() {
    const messages = this.state.messages.map((message, index) => {
      return <li key={message + index}>
                <b>{message.from}：</b>{message.body}
              </li>
    });
    return (
      <div>
        <h1>Hello, World!</h1>
        <input 
          type="text" 
          placeholder="pls enter a message" 
          onKeyUp={this.handleSubmit} />
        <ul>
          {messages}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
