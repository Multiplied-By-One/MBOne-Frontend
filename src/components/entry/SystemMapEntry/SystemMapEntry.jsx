import React from 'react';
import Container from "../../generic/container/Container";
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types'; 

function SystemMapEntry(props){
    return (<Container>
        {props.img}
        <Typography variant='h6'>{props.text}</Typography>
    </Container>)
}

SystemMapEntry.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string
}

export default SystemMapEntry
        

    