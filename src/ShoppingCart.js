import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCart({ cartTotalPrice }) {

  const cart = useSelector(st => st.cart, shallowEqual);
  const products = useSelector(st => st.products, shallowEqual);

  function renderCartItems() {
    
    return Object.keys(cart).map((id) => {
      const { name, price, image_url } = products[id];
      return (
        <ShoppingCartItem 
          key={id}
          id={id}
          name={name}
          price={price}
          image_url={image_url}
        />
      ); 
    });
  }


  return (
    <div className="ShoppingCart">
      <h1>Your Cart</h1>
      <ul>
        {renderCartItems()}
      </ul>

      <h3>Total: ${cartTotalPrice}</h3>
    </div>
  )
}

export default ShoppingCart;