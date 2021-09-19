import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../../../context/CartContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  disabled: {
    pointerEvents: "none",
    opacity: 0.2,
  },
});

const CartWidget = () => {
  const classes = useStyles();
  const { qtyInCart } = useContext(CartContext);

  return (
    <>
      {qtyInCart() > 0 ? (
        <div>
          <Link to="/cart">
            <ShoppingCartIcon id="cart-icon" />
          </Link>
          <sup>{qtyInCart()}</sup>{" "}
        </div>
      ) : (
        <div className={classes.disabled}>
          <Link to="/cart">
            <ShoppingCartIcon id="cart-icon" />
          </Link>
          <sup>{qtyInCart()}</sup>
        </div>
      )}
    </>
  );
};

export default CartWidget;
