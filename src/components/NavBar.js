import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import blueGrey from '@material-ui/core/colors/blueGrey'

const NavBar = () => {
     const styles = {
          root: {
               flexGrow: 1,
          },
          navBar: {
               backgroundColor: blueGrey[800],
               color: blueGrey[50]
          }
     }
  return (
    <div style={styles.root}>
      <AppBar position="static" style={styles.navBar}> 
        <Toolbar>
          <span style={styles.root}></span>     
          <Button color="inherit">Blog</Button>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Login/SignUp</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
