import React from 'react';
// import { useSelector, shallowEqual } from 'react-redux';

import ProductCard from './ProductCard';

function ProductsList({ products }) {

  console.log(`\n\n\n The value of products in ProductsList is `, products, '\n\n\n');

  function renderProducts() {
    return products.map(({ name, id, price, image_url }) => 
      <ProductCard name={name} price={price} image_url={image_url} id={id} key={id}/>)
  }

  return (
    <div className="ProductsList">
      {renderProducts()}
    </div>
  )
}

export default ProductsList;

