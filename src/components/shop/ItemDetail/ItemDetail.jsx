import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../../context/CartContext";

// Material UI
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
  // Context
  const { addItem, isInCart } = useContext(CartContext);

  // contador de productos para agregar al carrito
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
        <Grid item xs={12} md={6}>
          <div className="img_container">
            <img srcSet={image} alt={title} className="single_product_img" />
          </div>
        </Grid>

        {/* Product */}
        <Grid item xs={12} md={6}>
          <div>
            <h4>{short_description}</h4>

            <h5>
              <b>$ </b>
              {price}
            </h5>

            <p>
              Stock: <b>{quantity}</b>
            </p>

            <ItemCount
              stock={quantity}
              qty={qty}
              setQty={setQty}
              addItem={handleAddItem}
              isInCart={isInCart(_id)}
            />
            <p>Categoria: {category}</p>
          </div>
        </Grid>

        {/* Descripcion */}
        <Grid item xs={12}>
          <h3>Sobre este producto</h3>
          <p>{long_description}</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
