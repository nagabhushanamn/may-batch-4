import React, { Component } from 'react';

import { buy } from './actions/cart'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ViewCart extends Component {
    renderCartItems() {
        let { cart, actions } = this.props;
        let keys = Object.keys(cart);
        this.total_amount = 0;
        return keys.map((key, idx) => {
            let line = cart[key];
            let item = line.item;
            this.total_amount += item.price * line.qty;
            return (
                <tr key={idx}>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>
                        <i className="fa fa-plus" onClick={() => { actions.buy(item, 1) }}></i>&nbsp;
                    {line.qty}
                        &nbsp;
                    <i className="fa fa-minus" onClick={() => { actions.buy(item, -1) }}></i>
                    </td>
                    <td>&#8377;{item.price * line.qty}</td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">Items in cart</div>
                    <div className="card-body">
                        <table className="table table-bordered table-sm">
                            <thead>
                                <tr>
                                    <td>code</td>
                                    <td>name</td>
                                    <td>price</td>
                                    <td>qty</td>
                                    <td>total</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderCartItems()}
                            </tbody>
                        </table>
                        total_amount : &#8377;{this.total_amount}
                    </div>
                </div>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    let actions = { buy }
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(ViewCart);