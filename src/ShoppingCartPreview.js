import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

/** ShoppingCartPreview: Component that renders data on the cart totals at the top of the page (qty and total) 
 *    - Holds a prop of calculateCartTotals, a function passed down from App to calculate total price of the cart
 *    - Used in App
*/

function ShoppingCartPreview({ calculateCartTotal }) {

  // pass cartItemQty and cartTotal down as props (consistency)

  const cart = useSelector(st => st.cart, shallowEqual);
  let cartTotal = calculateCartTotal();
  let cartItemQty = Object.values(cart).reduce((acc, val) => acc + val, 0);

  return (
    <div className="ShoppingCartPreview">
      <span><b>Items in Cart: {cartItemQty} Total: ${cartTotal}</b></span>
    </div>
  )
}

export default ShoppingCartPreview;
