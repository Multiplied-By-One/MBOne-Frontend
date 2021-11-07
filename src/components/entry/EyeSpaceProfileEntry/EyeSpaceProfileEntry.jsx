import React from 'react';
import Container from "../../generic/container/Container";
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types'; 

function EyeSpaceProfileEntry(props){
    return (<Container>
        {props.img}
        <Typography variant='h6'>{props.text}</Typography>
    </Container>)
}

EyeSpaceProfileEntry.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string
}

export default EyeSpaceProfileEntry
    