export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItem.id
                ? { ...cartItem, inCart: true }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, inCart: true, quantity: 1 }];
};