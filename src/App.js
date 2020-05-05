import React from 'react';
import './App.css';

import ProductsList from './ProductsList';
import ShoppingCartPreview from './ShoppingCartPreview';
import { useSelector, shallowEqual } from 'react-redux';


/** App: Component that renders ShoppingCartPreview and ProductList components */

function App() {

  const products = useSelector(st => st.products, shallowEqual);
  const cart = useSelector(st => st.cart, shallowEqual);

  function calculateCartTotal() {
    let total = 0;
    for (let productID in cart) {
      total += (products[productID].price * cart[productID]);
    }
    return total;
  }

  return (
    <div className="App">
      <ShoppingCartPreview calculateCartTotal={calculateCartTotal} /> 
      <ProductsList />
    </div>
  );
}

export default App;