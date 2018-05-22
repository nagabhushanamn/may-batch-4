import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Product from './Product';
import ViewCart from './ViewCart';

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
    let { cart } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand" href="/#">{title}</a>
        </nav>
        <hr />
        {Object.keys(cart).length} item(s) in cart
        <hr />
        <ViewCart cart={cart} />
        <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
