import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  return (
    <div>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <h1>Bienvenido</h1>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
