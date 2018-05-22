import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Product from './Product';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App :: constructor()');
    //state initialization
    this.state = {
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

  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return <Product product={product} key={idx}/>;
    });
  }
  render() {
    console.log('App :: render()');
    let { title } = this.props;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand" href="/#">{title}</a>
        </nav>
        <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
