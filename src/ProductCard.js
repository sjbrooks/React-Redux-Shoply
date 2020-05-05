import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';

/** ProductCard: (Mostly) presentational component that renders a single product card but 
 *  includes buttons to dispatch actions to add or remove the items from a shopping cart 
 *    - Holds props of name, id, price, and image_url for the particular product being rendered
 *    - Used in ProductsList component
 * */

function ProductCard({ name, id, price, image_url }) {

  const dispatch = useDispatch();
  
  return (
    <div className="ProductCard" id={id}>
      <h4>{name}</h4>
      <img src={image_url} height="auto" width="200px" alt={`${name} product`}/>
      <p>{price}</p>

      <span>
        <button className="btn btn-success" onClick={(evt) => dispatch(addToCart(id))}>add</button>
        <button className="btn btn-danger" onClick={(evt) => dispatch(removeFromCart(id))}>remove</button>
      </span>
    </div>
  )
}

export default ProductCard;

