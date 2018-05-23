import React, { Component } from 'react';
import Product from './Product';
import { loadProducts } from './actions/products';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProductList extends Component {
    componentDidMount() {
        setTimeout(() => {
            let { actions } = this.props;
            actions.loadProducts();
        }, 2000);
    }
    renderProducts() {
        let { products } = this.props;
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
function mapStateToProps(state) {
    return {
        products: state.products
    }
}
function mapDispatchToProps(dispatch) {
    let actions = { loadProducts }
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);