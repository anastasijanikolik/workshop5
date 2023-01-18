import React from "react";
import { Box, Container, Grid } from "@mui/material";
import OptionCard from "./OptionCard";

const Feed = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box maxWidth="100%">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={6}>
            <OptionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <OptionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <OptionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <OptionCard />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Feed;