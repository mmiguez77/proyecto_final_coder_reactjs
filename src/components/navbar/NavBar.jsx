import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../shop/CartWidget/CartWidget";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static" color="primary" id="nav">
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              edge="start"
              marginright={2}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon id="burguer_menu" />
            </IconButton>
          </Hidden>

          <Link to={"/"}>
            <div id="nav-logo">
              <img src="/img/logoNavBar.png" alt="logo" id="imgOrigin" />
            </div>
          </Link>
          <Hidden smDown>
            <nav spacing={2} className={classes.title}>
              <Link className="nav-items" to={"/lascholas"}>
                Las Cholas
              </Link>

              <Link className="nav-items" to={"/tienda"}>
                Tienda
              </Link>

              <Link className="nav-items" to={"/blog"}>
                Blog
              </Link>

              <Link className="nav-items" to={"/contacto"}>
                Contacto
              </Link>
            </nav>
          </Hidden>

          <Button>
            <CartWidget />
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default NavBar;
