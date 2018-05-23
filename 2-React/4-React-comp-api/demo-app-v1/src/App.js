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
  incrementTotalCount(v) {
    let { totalCount } = this.state;
    this.setState({ totalCount: totalCount + v });
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
            {[1, -5, 10, 20, -10].map((n, idx) => {
              return <ActionButton value={n} onAction={(v) => { this.incrementTotalCount(v) }} key={idx} />
            })}
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
