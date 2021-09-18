import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import ItemListContainer from "../containers/ItemListContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import FooterContainer from "../containers/FooterContainer";
import {CartProvider} from "../context/CartContext";
import CartView from "../components/shop/CartView/CartView"
import Checkout from "../components/shop/Checkout/Checkout"


const MainContainer = () => {
  
  return (
    <CartProvider>
      <BrowserRouter>
      <div className="content">
        <NavBar />

        <Switch>
          <Route exact path="/">
            <h2>Home</h2>
          </Route>

          <Route exact path="/lascholas">
            <h1>Las Cholas</h1>
          </Route>

          <Route exact path="/tienda">
            <ItemListContainer />
          </Route>

          <Route exact path="/tienda/category/:catId">
            <ItemListContainer />
          </Route>

          <Route exact path="/tienda/detail/:itemId">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/cart">
            <CartView/>
          </Route>

          <Route exact path="/checkout">
            <Checkout/>
          </Route>

          <Route exact path="/blog">
            <h1>Blog</h1>
          </Route>

          <Route exact path="/contacto">
            <h1>Contacto</h1>
          </Route>

          <Route path="*">
            <h1>404</h1>
          </Route>

        </Switch>
        </div>
        <div className="footer">
        <FooterContainer />
        </div>
      </BrowserRouter>
      </CartProvider>
    
  );
};

export default MainContainer;
