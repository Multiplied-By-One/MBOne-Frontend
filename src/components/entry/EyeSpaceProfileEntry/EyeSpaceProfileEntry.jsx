import React from 'react';
import Container from "../../generic/container/Container";
import GenericButton from "../../generic/buttons/GenericButton"
import { Typography, Grid } from '@material-ui/core';
import PropTypes from 'prop-types'; 

function EyeSpaceProfileEntry(props){
    return (<GenericButton style={{ marginLeft: '1rem', marginTop: '1rem' }} >
    <Grid container>
      <Grid item xs='6'>
        <Typography variant='caption'>{props.text}</Typography>
        <Typography variant='subtitle1'>{props.subText}<br />{props.age}</Typography>
      </Grid>
      <Grid item xs='6' style={{ paddingLeft: '1rem' }}>
        <Container>
          <img src={props.img} style={{maxHeight: '120px'}} alt="profile picture"/>
        </Container>
      </Grid>
    </Grid>
  </GenericButton>)
}

EyeSpaceProfileEntry.propTypes = {
  text: PropTypes.string,
  subText: PropTypes.string,
  age: PropTypes.string,
  img: PropTypes.string 
} 

export default EyeSpaceProfileEntry