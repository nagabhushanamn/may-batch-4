import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ViewCart from './ViewCart';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home';
import ProductList from './ProductList';

import store from './store';

class App extends Component {

  constructor(props) {
    super(props);
    //state initialization
    this.state = {
      cart: {}, // {"111":{item,qty}}
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      let cart = store.getState().cart;
      this.setState({ cart });
    });
  }
  render() {
    let { title } = this.props;
    let { cart } = this.state;
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-light bg-primary">
            <Link className="navbar-brand" to="/">{title}</Link>
          </nav>
          <hr />
          {Object.keys(cart).length} item(s) in cart |
          <Link to="/products">View products</Link>
          <Link className="pull-right" to="/cart">View cart</Link>
          <hr />
          <Route exact={true} path="/" component={Home} />
          <Route path="/cart" render={() => <ViewCart cart={cart} />} />
          <Route path="/products" component={ProductList} />
        </div>
      </Router>
    );
  }
}

export default App;
