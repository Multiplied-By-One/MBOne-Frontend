import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  appBar: {
    backgroundColor: grey[900],
    color: grey[50],
  },
});

function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [collapse, setCollapse] = useState(true);

  const setDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const list = () => (
    <div className={classes.list}>
      <IconButton onClick={setDrawer(false)} onKeyDown={setDrawer(false)}>
        <ChevronLeftIcon />
      </IconButton>
      <List onClick={setDrawer(false)} onKeyDown={setDrawer(false)}>
        {[
          "Home",
          "System Map",
          "Message Board",
          "Journals",
          "Reminder",
          "Appreciation Station",
        ].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List onClick={setDrawer(false)} onKeyDown={setDrawer(false)}>
        {[
          "Treatment Hub",
          "System Rules",
          "Resources",
        ].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleCollapse}>
          <ListItemText primary="Headmates" />
          {collapse ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={collapse} timeout="auto" unmountOnExit>
          <List disablePadding>
            {["Headmate 1", "Headmate 2", "Headmate 3"].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <React.Fragment key={1}>
            <IconButton onClick={setDrawer(true)}>
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <Drawer anchor={"left"} open={open} onClose={setDrawer(false)}>
              {list()}
            </Drawer>
          </React.Fragment>
          <span style={{ flexGrow: 1 }}></span>
          <Button color="inherit">Setting</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Dashboard;
