import React from 'react';
import './App.css';

import ProductsList from './ProductsList';
import ShoppingCartPreview from './ShoppingCartPreview';
import { useSelector, shallowEqual } from 'react-redux';

function App() {

  const products = useSelector(st => st.products, shallowEqual);
  const cart = useSelector(st => st.cart, shallowEqual);

  console.log(`\n\n\n The value of products in App is `, products, '\n\n\n');

  return (
    <div className="App">
      <ShoppingCartPreview cart={cart} /> 
      <ProductsList products={products} />
    </div>
  );
}

export default App;


/** App
 *  - Shopping Cart (state / context / redux)
 *  - Inventory (state / context / redux)
 *    - Item card component (buttons to increment / decrement but only image)
 *    - Detailed Item Page component (buttons to increment / decrement, details about product)
 *    - (Home) ItemList (maps through the items array)
 *    - Checkout page / shopping cart display component
 *    - Routes
 *    
 */