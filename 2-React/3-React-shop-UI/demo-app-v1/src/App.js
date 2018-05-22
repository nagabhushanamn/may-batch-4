import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import classNames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App :: constructor()');
    //state initialization
    this.state = {
      currentTab: 1,
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
  changeTab(tab) {
    this.setState({ currentTab: tab });
  }
  renderBuyBtn(product) {
    if (product.canBuy)
      return <button className="btn btn-primary btn-sm">buy</button>
    else
      return null;
  }
  renderTabPanel(product) {
    let { currentTab } = this.state;
    let panel;
    switch (currentTab) {
      case 1:
        panel = <div>{product.description}</div>
        break;
      case 2:
        panel = <div>Not yet</div>
        break;
      case 3:
        panel = <div>None yet</div>
        break;
      default:
        panel = null;
    }
    return panel;
  }
  renderProducts() {
    let { products, currentTab } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={product.image} className="img-fluid" alt="pic" />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{product.name}</h5>
              <h6>&#8377;{product.price}</h6>
              {this.renderBuyBtn(product)}
              <hr />
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: currentTab === 1 })} onClick={() => { this.changeTab(1) }}>Description</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: currentTab === 2 })} onClick={() => { this.changeTab(2) }}>Specification</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: currentTab === 3 })} onClick={() => { this.changeTab(3) }}>Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(product)}
            </div>
          </div>
        </div>
      );
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
