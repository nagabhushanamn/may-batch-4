

export function loadReviews(productId) {
    let reviews = [
        { stars: 3, author: 'who@gmail.com', body: 'sample review' }
    ];
    return { type: 'LOAD_REVIEWS', productId, reviews }
}


export function addNewReview(productId, review) {
    //..
    return { type: 'ADD_NEW_REVIEW', productId, review }
}
