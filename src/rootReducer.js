import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import data from './data.json';

const productKeys = Object.keys(data.products);
const products = productKeys.map(key => ({...data.products[key], id: key}));

const INITIAL_STATE = { products, cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ADD_TO_CART:
      let product = state.products.find(p => p.id === action.payload.id);
      return {...state, cart: [...state.cart, product]};
    
    case REMOVE_FROM_CART:
      let productIdx = state.cart.findIndex(p => p.id === action.payload.id);
      let updatedProducts = state.cart.slice(0, productIdx).concat(state.cart.slice(productIdx + 1));
      return {...state, cart: updatedProducts};

    default:
      return state;
  }
}

export default rootReducer;