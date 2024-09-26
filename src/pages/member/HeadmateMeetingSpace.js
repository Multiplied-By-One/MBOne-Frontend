import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  useStickyState,
} from "react";
import Container from "../../components/generic/container/Container";
import { MenuList, Typography } from "@material-ui/core";
import GenericNavbar from "../../components/generic/GenericNavbar/GenericNavbar";
import AddIcon from "@material-ui/icons/Add";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MeetingSpaceEntry from "../../components/entry/MeetingSpaceEntry/MeetingSpaceEntry";
import TextInput from "../../components/generic/TextInput";
import { MBODark } from "../../themes/theme";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "@material-ui/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { HelpOutline } from "@material-ui/icons";

export default function HeadmateMeetingSpace(props) {
  {

    var retrievedMessages;
    //Declaring variables to be used
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [message, setMessage] = React.useState("");
    const [meetingContents, setMeetingContents] = React.useState([]);
    const [storedMeetingContents, setStoredMeetingContents] = React.useState(
      []
    );
    const openDropdown = Boolean(anchorEl);
    //Used to handle the drop down menus
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    /*The following useEffect calls assist with restoring the current meeting 
    contents. It uses one array to hold the string value of the typed message
    and another to store the react components that will be displayed once the array of messages 
    is retrieved. If an array is modified, the functions will update the other array so that
    they're all synced up. 
    */

    useEffect(() => {
      if (localStorage.getItem("meeting")) {
        setStoredMeetingContents(
          storedMeetingContents.concat(
            JSON.parse(localStorage.getItem("meeting"))
          )
        );
      }
    }, []);
    useEffect(() => {
      console.log("meetingContents", meetingContents.length);
      console.log("storedMeetingContents:", storedMeetingContents.length);

      localStorage.setItem("meeting", JSON.stringify(storedMeetingContents));
      retrievedMessages = JSON.parse(localStorage.getItem("meeting"));
      console.log(
        "local storage:",
        JSON.parse(localStorage.getItem("meeting")).length
      );
    }, [meetingContents]);
    useEffect(() => {
      setMeetingContents(
        storedMeetingContents.map((item) => (
          <>
            <MeetingSpaceEntry key={meetingContents.length} text={item} />
            <AlwaysScrollToBottom />
          </>
        ))
      );
    }, [retrievedMessages]);
    useEffect(() => {
      setMeetingContents(
        storedMeetingContents.map((item) => (
          <>
            <MeetingSpaceEntry key={meetingContents.length} text={item} />
            <AlwaysScrollToBottom />
          </>
        ))
      );
    }, [storedMeetingContents]);
    /*When the arrow button is clicked, it will add the current textfield value
    to the state array of strings and then pass the array to the meetingcontents array 
    which will place the string in a meeting entry.

    */
    const onAddBtnClick = (event) => {
      console.log("Before update", storedMeetingContents.length);
      setStoredMeetingContents(storedMeetingContents.concat(message));

      setMeetingContents(storedMeetingContents.concat(message));
      setMeetingContents(
        storedMeetingContents.map((item) => (
          <>
            <MeetingSpaceEntry key={meetingContents.length} text={item} />
            <AlwaysScrollToBottom />
          </>
        ))
      );
      console.log("AfterStored:", storedMeetingContents.length);
      console.log("after:", meetingContents.length);

      //setMeetingContents(meetingContents.concat(<div></div>));
    };

    const AlwaysScrollToBottom = () => {
      const elementRef = useRef();
      useEffect(() => elementRef.current.scrollIntoView());
      return <div ref={elementRef} />;
    };

    return (
      <>
        <ThemeProvider theme={MBODark}>
          <div>
            {/*This container handles the "Headmate meeting space" banner at the top*/}
            <Container>
              <Typography variant="h3">Headmate Meeting Space</Typography>
            </Container>
          </div>
          <div>
            {/*This is the main container*/}
            <Container
              style={{
                display: "flex",
                flexDirection: "row",
                // flexWrap: "wrap",
                flexGrow: "1",
                alignItems: "flex-start",
                height: "900px",
                width: "1250px",
                backgroundColor: "#343433",
                gap: "25px",
                position: "relative",
              }}
            >
              {/*This container holds the sidebar*/}
              <Container
                style={{
                  maxWidth: "250px",
                  justifyContent: "flex-start",
                  minHeight: "890px",
                  alignSelf: "flex-start",
                }}
              >
                {/*This container is supposed to display the user's name*/}
                <Container style={{ maxWidth: "250px", minHeight: "200px" }}>
                  <Typography variant="h3">The Bag System</Typography>
                 {/*This is the container that holds the sidebar list, meant to be clickable buttons*/} 
                </Container>
                <List>
                  <ListItemButton>
                    <Container style={{ minHeight: "45px", minWidth: "50px" }}>
                      <Typography variant="h6">Meeting title</Typography>
                    </Container>
                  </ListItemButton>
                  <ListItemButton>
                    <Container style={{ minHeight: "45px", minWidth: "50px" }}>
                      <Typography variant="h6">Meeting title</Typography>
                    </Container>
                  </ListItemButton>
                </List>
              </Container>
              {/*This container displays all the current entries*/}
              <Container
                style={{
                  display: "flex",
                  backgroundColor: "#343433",
                  minHeight: "690px",
                  maxHeight: "690px",
                  minWidth: "1000px",
                  flexDirection: "column",
                  gap: "25px",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "25px",
                  position: "relative",
                }}
              >
                <GenericNavbar
                  style={{
                    backgroundColor: "#343433",
                  }}
                  left={
                    <Button style={{ color: "white" }}>
                      <AddIcon />
                    </Button>
                  }
                  center={
                    <Typography variant="body1">
                      Meeting title/heading
                    </Typography>
                  }
                  right={
                    <>
                      <Button
                        style={{ color: "white" }}
                        id="dropdownButton"
                        aria-controls={
                          openDropdown ? "dropdown-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={openDropdown ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <MoreHorizIcon />
                      </Button>
                      <Menu
                        id="dropdown-menu"
                        anchorEl={anchorEl}
                        open={openDropdown}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "dropdownButton",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          Send Meeting to HUB
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          Download Conversation
                        </MenuItem>
                      </Menu>
                    </>
                  }
                />

                <div style={{ width: "900px" }}>{meetingContents}</div>
              </Container>
              {/*This container handles the input*/}
              <Container
                style={{
                  maxHeight: "190px",
                  minHeight: "190px",
                  minWidth: "1000px",
                  maxWidth: "1000px",
                  justifyContent: "flex-start",
                  alignSelf: "end",
                  position: "absolute",
                  bottom: "0",
                  right: "10px",
                }}
              >
                <TextInput
                  label={
                    <Button
                      onClick={onAddBtnClick}
                      style={{
                        color: "white",
                        position: "absolute",
                        left: "0",
                      }}
                    >
                      <ArrowForwardIosIcon />
                    </Button>
                  }
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                />
                <Button
                  style={{ position: "absolute", left: "0", color: "white" }}
                >
                  <AddIcon />
                </Button>
              </Container>
            </Container>
          </div>
        </ThemeProvider>
      </>
    );
  }
}
