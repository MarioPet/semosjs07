const initialState = {
    shoppingCartItems: 1
}

const ShoppingCartReducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT_ITEMS" :
            return {
                ...state,
                shoppingCartItems: state.shoppingCartItems + 1
            }
        case "DECREMENT_ITEMS" :
            return {
                ...state,
                shoppingCartItems: state.shoppingCartItems > 1 ? state.shoppingCartItems - 1 : 1
            }
        default: return state;
    }
}

export default ShoppingCartReducer;