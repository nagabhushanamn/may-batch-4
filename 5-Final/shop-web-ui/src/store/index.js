

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

import thunk from 'redux-thunk';

const initialState = {
    products: [],
    reviews: {
        '111': [
            { stars: 1, author: 'who', body: 'sample' }
        ]
    },
    cart: {}
};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));


export default store;