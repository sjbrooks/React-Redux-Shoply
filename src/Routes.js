import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';
import ShoppingCart from './ShoppingCart';

function Routes({ cartTotalPrice }) {

  return (
    <Switch>
      <Route exact path="/">
        <ProductsList />
      </Route>

      <Route path="/products/:id">
        <ProductDetail />
      </Route>

      <Route exact path="/cart">
        <ShoppingCart cartTotalPrice={cartTotalPrice} />
      </Route>

      <Redirect to="/" />
    </Switch>
  )
}


export default Routes;