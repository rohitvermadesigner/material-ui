import React from "react";
import { Button, Grid } from "@mui/material";
import { NotificationsOutlined, AccountCircleOutlined } from "@mui/icons-material";

const Header = () => {
  return (
    <>
    <main className="header">
      <Grid container spacing={2}>
        <Grid item xs={3}>
            <img src="images/logo.png" />
          <img src="" alt="" />
        </Grid>
        <Grid item xs={9}>
            <div className="top-right-list">
                <Button className="check-tenancy-score">Check Tenancy Score</Button>
                <Button variant="outlined">List your place</Button>
                <NotificationsOutlined />
                <AccountCircleOutlined />
            </div>
        </Grid>
      </Grid>
      </main>
    </>
  );
};
export default Header;
