import React from "react";

//Material UI
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";

const ItemCount = ({ stock, qty, setQty, addItem, isInCart }) => {
  const handleDecrease = () => {
    if (qty === 1) return;
    if (qty > stock) return;
    setQty(qty - 1);
  };

  const handleIncrease = () => {
    if (qty >= stock) return;
    setQty(qty + 1);
  };

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
            </div>
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
                className="item_count_btn"
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
                className="item_count_btn"
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
