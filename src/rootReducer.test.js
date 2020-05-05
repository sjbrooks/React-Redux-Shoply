import reducer from './rootReducer';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';


describe('tests rootReducer', () => {
  it('should be a pure function', function() {
    let output = reducer([1, 2, 3], { type: "NOT_FOUND" });
    expect(output).toEqual([1, 2, 3]);
  
    const INITIAL_STATE = { products: {}, cart: {} };
    output = reducer(INITIAL_STATE, { type: ADD_TO_CART, payload: { id: "nonExistantId" } });
    expect(INITIAL_STATE).toEqual(({ products: {}, cart: {} }));
  });

  it('should return the updated state when an item is added to the cart', function() {
    const INITIAL_STATE = { products: {}, cart: {} };
    let output = reducer(INITIAL_STATE, { type: ADD_TO_CART, payload: { id: "testProduct" } });
    expect(output).toEqual(({ products: {}, cart: {testProduct: 1} }));
  });
    
  it('should return the updated state when an item is removed to the cart', function() {
    const INITIAL_STATE = { products: {}, cart: { testProduct: 1 } };
    let output = reducer(INITIAL_STATE, { type: REMOVE_FROM_CART, payload: { id: "testProduct" } });
    expect(output).toEqual(({ products: {}, cart: {} }));
  });

});