import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Product from './Product';
import ViewCart from './ViewCart';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    //state initialization
    this.state = {
      cart: {}, // {"111":{item,qty}}
      products: [
        {
          code: '111',
          name: 'Laptop',
          price: 198000,
          description: 'New mac Pro',
          canBuy: true,
          image: 'images/Laptop.png'
        },
        {
          code: '222',
          name: 'Mobile',
          price: 18000,
          description: 'New  Pro',
          canBuy: true,
          image: 'images/Mobile.png'
        }
      ]
    }
  }
  addToCart(item) {
    let { cart } = this.state;
    let code = item.code;
    let cartLine;
    if (!cart[code]) {
      cartLine = { item, qty: 1 }
    } else {
      cartLine = cart[code];
      cartLine = { item, qty: cartLine.qty + 1 }
    }
    cart = Object.assign({}, cart, { [code]: cartLine })
    this.setState({ cart });
  }
  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return <Product onBuy={(item) => { this.addToCart(item) }} product={product} key={idx} />;
    });

  }
  render() {
    let { title } = this.props;
    let { cart, isCartOpen } = this.state;
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
          <Route path="/products" render={() => {
            return (
              <div className="list-group">
                {this.renderProducts()}
              </div>
            )
          }} />

        </div>
      </Router>
    );
  }
}

export default App;
