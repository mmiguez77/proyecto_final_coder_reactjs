import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const BagResume = () => {
  const { cart, totalBuyAmount } = useContext(CartContext);

  return (
    <Box m={2}>
      <Grid container>
        <Grid item md={12}>
          {cart.map((prod) => (
            <p key={prod._id}>
              {prod.title} x {prod.qty}
            </p>
          ))}
        </Grid>

        <Grid item md={12}>
          <p>
            Total de compra: <b>$ {totalBuyAmount()}</b>
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BagResume;
