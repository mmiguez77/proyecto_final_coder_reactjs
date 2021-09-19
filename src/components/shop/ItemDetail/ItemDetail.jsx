import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../../context/CartContext";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

const ItemDetail = ({
  _id,
  category,
  title,
  price,
  short_description,
  long_description,
  quantity,
  image,
}) => {
  const { addItem, isInCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  const handleAddItem = () => {
    addItem({
      _id,
      category,
      title,
      price,
      short_description,
      image,
      qty,
    });
  };

  return (
    <Box m={4} key={_id}>
      <Grid container spacing={3}>
        
        {/* Title */}
        <Grid item xs={12}>
          <h1 className="single_product_title">{title}</h1>
        </Grid>

        {/* Image */}
        <Grid item xs={12} md={5}>
          <div className="img_container">
            <img srcSet={image} alt={title} className="single_product_img" />
          </div>
        </Grid>

        {/* Product */}
        <Grid item xs={12} md={6} id="item_detail_right">
          <div id="div_item_detail_right">
            <h2>{short_description}</h2>

            <h3>
              Precio: <b>$ </b>
              {price}
            </h3>

            <p id="stock_item_detail_right">
              Stock: <b>{quantity}</b>
            </p>

            <ItemCount
              stock={quantity}
              qty={qty}
              setQty={setQty}
              addItem={handleAddItem}
              isInCart={isInCart(_id)}
            />
    <hr />
            <p>Categoria: {category}</p>
          
          </div>
        </Grid>

        {/* Descripcion */}

        <Grid
          container
          direction="row-reverse"
          justifyContent="center"
          alignItems="center"
          className="item_detail_long_description"
        >
          <Grid >
            <h3>Sobre este producto</h3>
          
            <p>{long_description}</p>

          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
