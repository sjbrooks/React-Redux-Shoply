import React from 'react';


function ShoppingCartPreview({ cart }) {

  console.log(`\n\n\n The value of cart in ShoppingCartPreview is `, cart, '\n\n\n');

  let cartTotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="ShoppingCartPreview">
      <span><b>Items in Cart: {cart.length} Total: {cartTotal}</b></span>
    </div>
  )
}

export default ShoppingCartPreview;
