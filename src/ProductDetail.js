import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';


function ProductDetail() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const { name, price, description, image_url } = useSelector(st => st.products[id]);
  const quantity = useSelector(st => st.cart[id]);

  return (
    <div className="ProductDetail">
      <h2>{name}</h2>
      <img src={image_url} height="400px" width="auto" alt={`${name} product`}/>
      <p>{description}</p>
      <p>${price}</p>

      <span>
        <button className="btn btn-success" onClick={(evt) => dispatch(addToCart(id))}>add</button>
        <b>QTY: {quantity || 0} </b>
        <button className="btn btn-danger" onClick={(evt) => dispatch(removeFromCart(id))}>remove</button>
      </span>

      <p>
        <Link to="/">Go Back</Link>
      </p>
    </div>
  )
}


export default ProductDetail;