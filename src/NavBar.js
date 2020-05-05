import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

/** NavBar: Component that renders data on the cart totals at the top of the page (qty and total) 
 *    - Holds a prop of calculateCartTotals, a function passed down from App to calculate total price of the cart
 *    - Used in App
*/

function NavBar({ cartItemQty, cartTotalPrice }) {

  return (
    <div className="NavBar">
      <div className="NavBar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Checkout</Link>
      </div>
      <span><b>Items in Cart: {cartItemQty} Total: ${cartTotalPrice}</b></span>
    </div>
  )
}

export default NavBar;
