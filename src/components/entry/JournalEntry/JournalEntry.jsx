import React from 'react';
import Container from "../../generic/container/Container";
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types'; 

function JournalEntry(props){
    return (<Container {...props}>
    <Typography variant='h6'>{props.text}</Typography>
  </Container>)
}

JournalEntry.propTypes = {
  text: PropTypes.string
} 

export default JournalEntry