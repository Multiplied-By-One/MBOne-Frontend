import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Container from "../generic/container/Container";
import PropTypes from 'prop-types';

export default function Timestamp(props) {
    return (
        <div {...props} onClick={props.onClick}>
            <Container style={{ display: "flex", overflow: "hidden", textAlign: "center", alignItems: "stretch", cursor:"pointer" }}>
                <Grid item xs={5}>
                    <Container style={{ transform: "scale(1.1)", padding: "5% 1%", height: "100%", display: "flex", alignItems: "center" }}> {props.date}<br />{props.year} </Container>
                </Grid>
                <Grid item xs={8} style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h6" style={{ padding: "0% 4%", flexGrow: "1" }}>{props.title}</Typography>
                </Grid>
            </Container>
        </div>
    )
}

Timestamp.propTypes = {
    date: PropTypes.string,
    year: PropTypes.number,
    title: PropTypes.string,
}


