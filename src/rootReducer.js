import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import data from './data.json';


const INITIAL_STATE = { products: data.products, cart: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ADD_TO_CART:
      let newCart = {...state.cart};
      newCart[action.payload.id] = (newCart[action.payload.id] || 0) + 1;
      return {...state, cart: newCart };
    
    case REMOVE_FROM_CART:
      let newCart2 = {...state.cart};
      if (state.cart[action.payload.id] > 0) {
        newCart2[action.payload.id] -= 1;
        // removes product from cart with qty = 0
        if (newCart2[action.payload.id] === 0) {
          delete newCart2[action.payload.id];
        }
      } 
      return {...state, cart: newCart2};

    default:
      return state;
  }
}

export default rootReducer;