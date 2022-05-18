import React from "react";
import Container from "../../generic/container/Container";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import SystemMapEntry from "../../entry/SystemMapEntry/SystemMapEntry";
import { ThemeProvider } from "@material-ui/styles";
import { MBODark } from "../../../themes/theme";

function MeetingSpaceEntry(props) {
  return (
    <ThemeProvider theme={{ MBODark }}>
      <Container
        style={{
          display: "flex",
          position: "relative",
          minHeight: "200px",
          justifyContent: "right",
          marginBottom: "25px",
        }}
      >
        <Container
          style={{
            maxWidth: "150px",
            minHeight: "150px",
          }}
        >
          <Container style={{ maxHeight: "130px", maxWidth: "130px" }}>
            <img
              src={
                "https://i.pinimg.com/236x/35/7c/9e/357c9e6f9b84b147dc0316bc995dea57.jpg"
              }
              style={{ maxHeight: "100px", maxWidth: "100px" }}
              alt="profile picture"
            />
          </Container>
          <Typography variant="caption">Melissa</Typography>
        </Container>
        <div style={{ minWidth: "700px" }}>
          <Typography variant="caption">{props.text}</Typography>
        </div>
      </Container>
    </ThemeProvider>
  );
}

MeetingSpaceEntry.propTypes = {
  text: PropTypes.string,
  subText: PropTypes.string,
};

export default MeetingSpaceEntry;
