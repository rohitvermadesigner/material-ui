import React from "react";
import { Box, Typography, FormControl, TextField } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Box className="search-box">
        <Typography variant="h2">We care about your renting worried</Typography>
        <Typography variant="h5">
          Building the largest brokerage free community
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }}>
        <TextField id="outlined-basic" variant="outlined" placeholder="Search by locality, location, street..." />
        </FormControl>
      </Box>
    </>
  );
};
export default HomePage;
