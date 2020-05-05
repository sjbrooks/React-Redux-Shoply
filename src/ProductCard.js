import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';

function ProductCard({ name, id, price, image_url }) {

  const dispatch = useDispatch();
  
  return (
    <div className="ProductCard" id={id}>
      <h4>{name}</h4>
      <img src={image_url} height="auto" width="200px" alt={`${name} product`}/>
      <p>{price}</p>

      <span>
        <button className="btn-btn-success" onClick={(evt) => dispatch(addToCart(id))}>add</button>
        <button className="btn-btn-danger" onClick={(evt) => dispatch(removeFromCart(id))}>remove</button>
      </span>
    </div>
  )
}

export default ProductCard;

