

export function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case 'LOAD_REVIEWS': {
            let productId = action.productId;
            let reviews = action.reviews;
            let existingReviews = state[productId] || [];
            reviews = [...existingReviews, ...reviews]
            return Object.assign({}, state, { [productId]: reviews });
        }
        case "ADD_NEW_REVIEW": {
            let productId = action.productId;
            let review = action.review;
            let existingReviews = state[productId] || [];
            let reviews = [...existingReviews, review]
            return Object.assign({}, state, { [productId]: reviews });
        }
        default:
            return state
    }
}