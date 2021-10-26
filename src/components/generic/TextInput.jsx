import React from 'react';
import Container from './container/Container'
import GenericButton from './buttons/GenericButton'
import { Typography, TextField, Grid } from '@material-ui/core';

const TextInput = (props) => {
    return(
        <Typography variant={props.font}>
        <Grid container style={{display: 'flex', justifyContent: 'space-evenly', paddingLeft: '5%', paddingRight: '5%'}}>
            <Grid item xs='4'>
                {props.label}:
            </Grid>
            <Grid item xs='8'>
                <Container style={{marginLeft: '1rem' }}>
                    <TextField onChange={props.onChange} required style={{width: "100%"}} />
                </Container>
                <br />
            </Grid>
        </Grid>
        </Typography>
    )
}

export default TextInput
