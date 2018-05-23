
export function loadProducts() {
    let products = [
        {
            id: '111',
            code: '111',
            name: 'Laptop',
            price: 198000,
            description: 'New mac Pro',
            canBuy: true,
            image: 'images/Laptop.png'
        },
        {
            id: '222',
            code: '222',
            name: 'Mobile',
            price: 18000,
            description: 'New  Pro',
            canBuy: true,
            image: 'images/Mobile.png'
        }
    ]
    return { type: 'LOAD_PRODUCTS', products }
}