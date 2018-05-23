

export function cartReducer(state = {}, action) {
    switch (action.type) {
        case 'BUY': {
            let cart = state;
            let item = action.item;
            let code = item.code;
            let cartLine;
            if (!cart[code]) {
                cartLine = { item, qty: 1 }
            } else {
                cartLine = cart[code];
                cartLine = { item, qty: cartLine.qty + action.qty }
            }
            cart = Object.assign({}, cart, { [code]: cartLine })
            return cart;
        }
        default:
            return state;
    }
}