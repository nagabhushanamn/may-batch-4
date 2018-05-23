import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        let apiUrl = 'http://0.0.0.0:8080/api/products';
        fetch(apiUrl)
            .then(response => response.json())
            .then(products => {
                this.setState({ products });
            });
    }
    renderProducts() {
        let { products } = this.state;
        return products.map((product, idx) => {
            return <Product onBuy={(item) => { this.addToCart(item) }} product={product} key={idx} />;
        });

    }
    componentDidCatch(err){
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