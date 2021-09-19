import React from "react";
import { NavLink } from "react-router-dom";
import CategorySelect from "../CategorySelect/CategorySelect";
import { ButtonGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 450,
  },
});

const ItemList = ({ productos = [] }) => {
  const classes = useStyles();

  return (
    <Container component="section" maxWidth="lg">
      <h1>Tienda</h1>

      <Grid>
        <CategorySelect />
      </Grid>

      <div>
        <Grid container spacing={3} >
          {productos.map((prod) => (
            <Grid key={prod._id} item xs={12} md={4} className="shop_section">
              <Card className={classes.root} >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={prod.image}
                    alt={prod.title}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {prod.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {prod.short_description}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group"
                    size="small"
                  >
                    <Button>
                      <NavLink to={`/tienda/detail/${prod._id}`}>
                        <VisibilityIcon />
                      </NavLink>
                    </Button>

                    <Button>
                      <FavoriteIcon />
                    </Button>
                  </ButtonGroup>

                </CardActions>
              </Card>

            </Grid>
          ))}
          </Grid>
      </div>
    </Container>
  );
};

export default ItemList;
