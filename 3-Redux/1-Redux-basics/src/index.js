
console.log('-index.js-');
import { createStore, combineReducers } from 'redux';

//---------------------------------------------
// step-1: Action creator(s)
function increment(value) {
    return { type: 'INCREMENT', value };
}
function decrement(value) {
    return { type: 'DECREMENT', value };
}
function addNewReview(productId, review) {
    return { type: 'ADD_NEW_REVIEW', productId, review }
}
//---------------------------------------------
//step-2 : reducer(s)
function counterReducer(state = {}, action) {
    console.log('counterReducer()');
    switch (action.type) {
        case 'INCREMENT':
        case 'ADD_NEW_REVIEW':
            return Object.assign({}, { count: state.count + (action.value ? action.value : 1) });
        case 'DECREMENT':
            return state;
        //return Object.assign({}, { count: state.count - action.value });
        default:
            return state;
    }
}
function reviewsReducer(state = {}, action) {
    console.log('reviewsReducer()');
    switch (action.type) {
        case 'ADD_NEW_REVIEW': {
            let reviews = state[action.productId] || [];
            reviews = [...reviews, action.review];
            return Object.assign({}, state, { [action.productId]: reviews });
        }
        default:
            return state;
    }
}
//---------------------------------------------
// step-3 : create root-reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    reviews: reviewsReducer
});
//---------------------------------------------
let initialState = {
    counter: { count: 100 },
    reviews: {
        "111": [
            { stars: 1, author: 'nag@gmail.com', body: 'sample review' }
        ]
    }
};
// step-4 : create store
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//---------------------------------------------


// View ( plain-js | jqury | react | NG )

document.getElementById('incBtn')
    .addEventListener('click', () => {
        let action = increment(10);
        store.dispatch(action);
    });

document.getElementById('decBtn')
    .addEventListener('click', () => {
        let action = decrement(10);
        store.dispatch(action);
    });

document.getElementById('lapRevBtn')
    .addEventListener('click', () => {
        let action = addNewReview('111', { stars: 1, author: 'who@email.com', body: '...' });
        store.dispatch(action);
    });

document.getElementById('mobRevBtn')
    .addEventListener('click', () => {
        let action = addNewReview('222', { stars: 1, author: 'who@email.com', body: '...' });
        store.dispatch(action);
    });

// subscribe for state's change
let countSpan = document.getElementById('countSpan');

let state = store.getState();
let counter = state.counter;
countSpan.innerText = counter.count

store.subscribe(() => {
    console.log('subscribing...');
    let state = store.getState();
    let counter = state.counter;
    countSpan.innerText = counter.count
});



