import React from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import grey from "@material-ui/core/colors/grey";
import teal from "@material-ui/core/colors/teal";

const NavBar = () => {
  const styles = {
    root: {
      flexGrow: 1,
    },
    navBar: {
      backgroundColor: grey[900],
      color: grey[50],
    },
    link: {
      display: "flex",
      fontSize: 18,
      alignItems: "center",
      fontWeight: "bold",
      textDecoration: "none",
      color: "inherit",
      textTransform: "capitalize",
    },
    activeLink: {
      fontWeight: "bold",
      color: teal[200]
    }
  };
  return (
    <div style={styles.root}>
      <AppBar position="static" style={styles.navBar}>
        <Toolbar>
          <span style={styles.root}></span>
          <Button color="inherit">
            <NavLink
              style={styles.link}
              activeStyle={styles.activeLink}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              style={styles.link}
              activeStyle={styles.activeLink}
              exact
              to="/"
            >
              Home
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              style={styles.link}
              activeStyle={styles.activeLink}
              to="/blog"
            >
              Blog
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              style={styles.link}
              activeStyle={styles.activeLink}
              to="/faq"
            >
              FAQ
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              style={styles.link}
              activeStyle={styles.activeLink}
              to="/contact"
            >
              Contact
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              style={styles.link}
              activeStyle={styles.activeLink}
              to="/login"
            >
              Login/SignUp
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
