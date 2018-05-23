import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Greeting from './Greeting'
class App extends Component {
  constructor(props) {
    super(props)
    console.log('App :: constructor()');
    this.state = {
      message: 'greetings'
    }
  }
  changeMessage(message) {
    this.setState({ message });
  }
  render() {
    console.log('App :: render()');
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>React-Component-API : life-cycle</h1>
        <hr />
        <div className="card">
          <div className="card-header">App Component </div>
          <div className="card-body">
            <button onClick={(e) => { this.changeMessage('good morning') }}>GM</button>
            <button onClick={(e) => { this.changeMessage('good Noon') }}>GN</button>
            <button onClick={(e) => { this.changeMessage('good evening') }}>GE</button>
            <button onClick={(e) => { this.changeMessage('') }}>Remove</button>
            <hr />
            {message ? <Greeting message={message} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
