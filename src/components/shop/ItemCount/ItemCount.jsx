import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import { decrease, increase } from "./ItemCountFn.js";

const ItemCount = ({ stock, qty, setQty, addItem, isInCart }) => {
  
  const handleDecrease = () => {decrease(qty, stock, setQty)};
  const handleIncrease = () => {increase(qty, stock, setQty)};

  return (
    <>
      {!stock ? (
        <p id="sin_stock_tag">Sin stock</p>
      ) : (
        <div>
          <div id="qty_tag">
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={handleDecrease}
            >
              -1
            </Button>
            <span>
              {" "}
              <b>{qty}</b>{" "}
            </span>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={handleIncrease}
            >
              +1
            </Button>
          </div>

          {isInCart ? (
            <div>
              <div>
                <Link to="/cart">
                  <Button
                    variant="contained"
                    id="btn_buy"
                    aria-label="contained primary button group"
                    startIcon={<ShoppingCartOutlinedIcon />}
                  >
                    ir a Carrito
                  </Button>
                </Link>
              </div>

              <div>
                <Link to="/tienda">
                  <Button
                    variant="contained"
                    id="btn_buy"
                    aria-label="contained primary button group"
                    startIcon={<StorefrontOutlinedIcon />}
                  >
                    ir a Tienda
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <Button
                onClick={() => {
                  addItem();
                }}
                variant="contained"
                id="btn_buy"
                aria-label="contained primary button group"
                startIcon={<AddShoppingCartOutlinedIcon />}
              >
                Comprar
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ItemCount;
