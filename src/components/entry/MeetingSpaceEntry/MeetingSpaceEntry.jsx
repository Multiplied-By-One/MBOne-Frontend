import React from 'react';
import Container from "../../generic/container/Container";
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types'; 

function MeetingSpaceEntry(props){
    return (<Container>
        <Typography variant='caption'>{props.text}</Typography>
        <Typography variant='subtitle1'>{props.subText}</Typography>
    </Container>)
}

MeetingSpaceEntry.propTypes = {
    text: PropTypes.string,
    subText: PropTypes.string
}

export default MeetingSpaceEntry
        