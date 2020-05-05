import React from 'react';
import './App.css';

import Routes from './Routes';
import NavBar from './NavBar';
import { useSelector, shallowEqual } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


/** App: Component that renders NavBar and ProductList components */

function App() {

  const products = useSelector(st => st.products, shallowEqual);
  const cart = useSelector(st => st.cart, shallowEqual);

  function calculateCartTotal() {
    let total = 0;
    for (let productID in cart) {
      total += (products[productID].price * cart[productID]);
    }
    return total.toFixed(2);
  }

  let cartTotalPrice = calculateCartTotal();
  let cartItemQty = Object.values(cart).reduce((acc, val) => acc + val, 0);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar cartItemQty={cartItemQty} cartTotalPrice={cartTotalPrice} />
        <Routes cartTotalPrice={cartTotalPrice} />
      </BrowserRouter>
    </div>
  );
}

export default App;