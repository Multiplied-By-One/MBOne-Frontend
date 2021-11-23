import React from 'react';
import Container from "../../generic/container/Container";
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types'; 

function EyeSpaceProfileEntry(props){
    return (<Container style={{padding:"1rem 2.5rem", textAlign:"center"}}>
        <img 
        style={{maxHeight:"230px", maxWidth: "200px" }}
        src={props.img} 
        alt="profile picture" />
        <Typography variant='h6'>{props.text}</Typography>
    </Container>)
}

EyeSpaceProfileEntry.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string
}

export default EyeSpaceProfileEntry
    