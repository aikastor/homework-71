import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useStyles} from "./styles";
import {NavLink} from "react-router-dom";

const Navigation = () => {
  const classes = useStyles();
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ReactCafe
          </Typography>
          <Button color="inherit" component={NavLink} to="/">
            MENU
          </Button>
          <Button component={NavLink} color="inherit" to='/orders/'>
            ORDERS
          </Button>
        </Toolbar>
      </AppBar>
  );
};

export default Navigation;