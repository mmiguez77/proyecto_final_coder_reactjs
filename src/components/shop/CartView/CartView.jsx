import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link, NavLink } from "react-router-dom";

// Material UI
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import Box from "@material-ui/core/Box";

const CartView = () => {
  const { cart, removeItem, clear, prodTotalAmount, totalBuyAmount } =
    useContext(CartContext);

  return (
    <div>
      <h1>Mi Carrito</h1>

      {cart.length > 0 ? (
        <Box m={3}>
          <h3>Productos agregados al carrito:</h3>
          <hr />
        </Box>
      ) : (
        <>
          <h3>No hay productos en el carrito</h3>
          <Button>
            <Link to="/tienda">
              <Button
                variant="contained"
                id="btn_buy"
                aria-label="contained primary button group"
                startIcon={<StorefrontOutlinedIcon />}
              >
                ¡Vamos a comprar!
              </Button>
            </Link>
          </Button>
        </>
      )}

      {cart.map((prod) => (
        <Box m={2} key={prod._id}>
          <Grid container className="grid_container_prod_cart">
            <Grid item xs={12} md={3}>
              <img src={prod.image} width="150" height="150" alt="" className="img_cart"/>
            </Grid>

            <Grid item xs={12} md={3}>
              <NavLink to={`/tienda/detail/${prod._id}`} className="nav_link">
                <h3>{prod.title}</h3>
              </NavLink>
              <span>Categoria:</span>{" "}
              <NavLink to={`/tienda/category/${prod.category}`} className="nav_link">
                <span>{prod.category}</span>
              </NavLink>
            </Grid>

            <Grid item xs={12} md={2}>
              <h3>Precio: ${prod.price}</h3>
              <h3>Cantidad: {prod.qty}</h3>
            </Grid>

            <Grid item xs={6} md={2}>
              <h3>Total: $ {prodTotalAmount(prod.qty, prod.price)}</h3>
            </Grid>

            <Grid item xs={6} md={2}>
              <Button
                onClick={() => {
                  removeItem(prod._id);
                }}
                id="btn_buy_delete"
                size="large"
                variant="contained"
                aria-label="contained primary button group"
                startIcon={<DeleteForeverIcon />}
              ></Button>
            </Grid>
          </Grid>
        </Box>
      ))}

      {cart.length > 0 && (
        <Box m={2}>
          <Grid container>
            <Grid item md={4}></Grid>
            <Grid item md={6}></Grid>
            <Grid item md={2}>
              <Button
                id="btn_buy"
                onClick={() => {
                  clear();
                }}
                size="large"
                variant="contained"
                aria-label="contained primary button group"
              >
                Vaciar Carrito
              </Button>
            </Grid>

            <Grid
              item
              md={12}
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              id="grid_finalizar_compra"
            >
              <div>
                <h2 id="text_total_compra">TOTAL DE LA COMPRA</h2>
                <h3>El monto es de: $ {totalBuyAmount()}</h3>
              </div>
            </Grid>

            <Grid
              item
              md={12}
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              id="btn_finalizar_compra"
            >
              <div>
                <Button
                  id="btnFinalizarCompra"
                  size="small"
                  variant="contained"
                  aria-label="contained primary button group"
                >
                  <Link to={"/checkout"}>Finalizar Compra</Link>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default CartView;
