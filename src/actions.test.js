import { addToCart, removeFromCart } from './actions';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';


describe('tests action creators', () => {
  it('addToCart should return correct type and payload', function() {
    expect(addToCart("test_id")).toEqual({ type: ADD_TO_CART, payload: {id: "test_id"}});
  });
  
  it('removeFromCart should return correct type and payload ', function() {
    expect(removeFromCart("test_id")).toEqual({ type: REMOVE_FROM_CART, payload: {id: "test_id"}});
  });
});