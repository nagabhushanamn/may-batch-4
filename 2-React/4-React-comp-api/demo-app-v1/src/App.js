import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ActionButton from './ActionButton';
import TotalCountDisplay from './TotalCountDisplay';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('App :: constructor()');
    this.state = {
      totalCount: 100
    }
  }
  incrementTotalCount() {
    let { totalCount } = this.state;
    this.setState({ totalCount: totalCount + 1 });
  }
  render() {
    console.log('App :: render()');
    let { totalCount } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>React-Component-API : props & state</h1>
        <hr />
        <div className="card">
          <div className="card-header">App Component : <span className="badge badge-danger">{totalCount}</span> </div>
          <div className="card-body">
            <ActionButton value={1} onAction={() => { this.incrementTotalCount() }} />
            <ActionButton value={10} onAction={() => { this.incrementTotalCount() }} />
            <ActionButton value={-10} onAction={() => { this.incrementTotalCount() }} />
            <div style={{ clear: 'both' }}>
              <TotalCountDisplay value={totalCount} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
