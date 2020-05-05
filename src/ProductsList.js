import React from 'react';
import ProductCard from './ProductCard';
import { useSelector, shallowEqual } from 'react-redux';


/** ProductsList: Component that renders a list of products available for purchase 
 *      - Selects state of products (our inventory), an object of product objects, from redux store
 *      - Uses ProductCard component
 *      - Used in App component
*/

function ProductsList() {
  const products = useSelector(st => st.products, shallowEqual);
  const productKeys = Object.keys(products);
 

  function renderProducts() {
    return productKeys.map((id) => {
      let {name, price, image_url} = products[id];
      return <ProductCard name={name} price={price} image_url={image_url} id={id} key={id}/>
    });
  }

  return (
    <div className="ProductsList">
      {renderProducts()}
    </div>
  )
}

export default ProductsList;

