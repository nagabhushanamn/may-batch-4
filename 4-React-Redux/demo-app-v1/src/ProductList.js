import React, { Component } from 'react';
import Product from './Product';
import store from './store';
import { loadProducts } from './actions/products';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [] // state
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            console.log('ProductList :: subscribe()');
            let products = store.getState().products;
            this.setState({ products });
        });
        setTimeout(() => {
            store.dispatch(loadProducts());
        }, 2000);
    }
    renderProducts() {
        let { products } = this.state;
        return products.map((product, idx) => {
            return <Product product={product} key={idx} />;
        });

    }
    componentDidCatch(err) {
    }
    render() {
        return (
            <div>
                <div className="list-group">
                    {this.renderProducts()}
                </div>
            </div>
        );
    }
}

export default ProductList;