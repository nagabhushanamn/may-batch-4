import React, { Component } from 'react';

class ViewCart extends Component {
    renderCartItems() {
        let { cart } = this.props;
        let keys = Object.keys(cart);
        this.total_amount = 0;
        return keys.map((key) => {
            let line = cart[key];
            let item = line.item;
            this.total_amount += item.price * line.qty;
            return (
                <tr>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>{line.qty}</td>
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

export default ViewCart;
