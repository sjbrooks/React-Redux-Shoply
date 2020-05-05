import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import './ShoppingCartItem.css';

function ShoppingCartItem({ id, name, price, image_url }) {

  const dispatch = useDispatch();
  const quantity = useSelector(st => st.cart[id]);

  return (
    <li className="ShoppingCartItem">
      <img src={image_url} height="100px" width="auto" alt={`${name} product`} />
      <h4>{name}</h4>
      <p>${price} x {quantity} = {price * quantity}</p>

      <span>
        <button className="btn btn-success" onClick={(evt) => dispatch(addToCart(id))}>+</button>
        <b>{quantity} </b>
        <button className="btn btn-danger" onClick={(evt) => dispatch(removeFromCart(id))}>-</button>
      </span>
    </li>
  )
}

export default ShoppingCartItem;