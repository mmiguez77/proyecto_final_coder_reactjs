import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import generateOrder from "./CheckoutFn";
import BagResume from "../BagResume/BagResume";
import { Redirect } from "react-router";
import Swal from "sweetalert2";
import Button from "@material-ui/core/Button";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));


const Checkout = () => {
  const { cart, totalBuyAmount, clear } = useContext(CartContext);
  const classes = useStyles();

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.email || !values.phone || !values.name) {
      Swal.fire("Por favor ingrese todos los datos");
    } else {
      generateOrder(values, cart, totalBuyAmount)
        .then((res) => {
          Swal.fire(
            `¡Gracias por su compra! — Por favor conserve su identificador: ${res}`
          );
          setTimeout(() => {
            clear();
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {!cart.length ? (
        <Redirect to="/" />
      ) : (
        <>
          <h1>Checkout</h1>
          <Box m={4}>
            <Grid container>
              <Grid item md={6}>
                <h4>Resumen de compra</h4>
                <BagResume />
              </Grid>

              <Grid item md={6}>
                <form
                  className={classes.root}
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <TextField
                    id="name"
                    label="Nombre"
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    required
                  />
                  <TextField
                    id="phone"
                    label="Teléfono"
                    type="text"
                    name="phone"
                    onChange={handleInputChange}
                    required
                  />
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    required
                  />
                  <Grid item md={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      id="btn_buy"
                      aria-label="contained primary button group"
                      startIcon={<LocalMallIcon />}
                    >
                      Generar Pedido
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Box>{" "}
        </>
      )}
    </>
  );
};

export default Checkout;
