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

import { connect } from 'react-redux';

class App extends Component {

  render() {
    let { title, cart } = this.props;
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

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(App);
