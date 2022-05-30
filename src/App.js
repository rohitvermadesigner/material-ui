import "./App.css";
import {
  Typography,
  AppBar,
  Card,
  CardMedia,
  CardActions,
  CardContentClassKey,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Alert,
  Box,
} from "@mui/material";

import { createTheme } from "@mui/material/styles";
import Header from "./view/Header";
import Footer from "./view/Footer";
import HomePage from "./view/Home";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header />
        <HomePage />
        <Footer />
      </Container>

      {/* <main className={classes.container}>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h5" color="textPrimary" align="center">
              Photo Album
            </Typography>
            <Typography variant="h5" color="textSecondary" align="center">
              Hello everyone this is album. Hello everyone this is album. Hello
              everyone this is album. Hello everyone this is album..
            </Typography>
            <div>
              <Grid container spacing={1} justify="center" style={{display:'flex', alignItem:'center', justifyContent:'center', marginTop:'10px'}}>
                <Grid item>
                <Alert severity="error">This is an error alert — check it out!</Alert>
                  <Button className={classes.btn} variant="contained" color="primary">
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main> */}
    </>
  );
}

export default App;
