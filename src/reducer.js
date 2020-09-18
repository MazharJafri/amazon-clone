export const initialState = {
    cart: [],
};

function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
        // Logic for adding item to cart
        return { 
        
            ...state,
            cart: [...state.cart, action.item],
        };
        case 'REMOVE_FROM_Cart':
        // Logic for removing item from cart
        return { state }
        default: 
            return state;
    }
};

export default reducer;