import React, { Component } from 'react';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm';

import store from './store';
import { loadReviews, addNewReview } from './actions/reviews';
import { buy } from './actions/cart';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1,
            reviews: []
        }
    }
    componentDidMount() {
        let { product } = this.props;
        store.subscribe(() => {
            console.log('Product:: subscribe()');
            let reviews = store.getState().reviews[product.id] || [];
            this.setState({ reviews });
        });
    }
    handleNewReview(review) {
        let { product } = this.props;
        store.dispatch(addNewReview(product.id, review));
    }
    changeTab(tab) {
        this.setState({ currentTab: tab }, () => {
            if (tab === 3) {
                let { product } = this.props;
                store.dispatch(loadReviews(product.id));
            }
        });
    }
    renderBuyBtn(product) {
        if (true)
            return <button onClick={() => { store.dispatch(buy(product, 1)) }} className="btn btn-primary btn-sm">buy</button>
        else
            return null;
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review review={review} key={idx} />
        });
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
                panel = (
                    <div>
                        {this.renderReviews()}
                        <hr />
                        <ReviewForm onNewReview={(review) => { this.handleNewReview(review) }} />
                    </div>
                )
                break;
            default:
                panel = null;
        }
        return panel;
    }
    render() {
        let { product } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
                <div className="list-group-item">
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
            </div>
        );
    }
}

export default Product;