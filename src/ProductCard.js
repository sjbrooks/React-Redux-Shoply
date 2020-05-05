import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addToCart, removeFromCart } from './actions';

/** ProductCard: component that renders a single product card but 
 *  includes buttons to dispatch actions to add or remove the items from a shopping cart 
 *    - Holds props of name, id, price, and image_url for the particular product being rendered
 *    - Used in ProductsList component
 * */

function ProductCard({ name, id, price, image_url }) {

  const dispatch = useDispatch();
  const cart = useSelector(st => st.cart, shallowEqual);

  return (
    <div className="ProductCard" id={id}>
      <h4>{name}</h4>
      <Link to={`/products/${id}`}>
        <img src={image_url} height="200px" width="auto" alt={`${name} product`} />
      </Link>
      <p>{price}</p>

      <span>
        <button className="btn btn-success" onClick={(evt) => dispatch(addToCart(id))}>add</button>
        <b>QTY: {cart[id] || 0} </b>
        <button className="btn btn-danger" onClick={(evt) => dispatch(removeFromCart(id))}>remove</button>
      </span>
    </div>
  )
}

export default ProductCard;

