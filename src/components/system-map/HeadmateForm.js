import React, { useContext, useEffect, useState, useReducer } from 'react';
import { HeadmateReducer,  addheadmate, deleteheadmate, editheadmate, getheadmates } from '../../context/HeadmateContext'
import Container from '../generic/container/Container'
import GenericButton from '../generic/buttons/GenericButton'
import { Typography } from '@material-ui/core';

function HeadmateForm() {
    // const {state, dispatch} = useContext(Context)

    // spacing for now, will not work in the long run, especially smaller screen. fix default container spacing
      return <div style={{paddingLeft: '25%', paddingRight: '25%'}}>
        <Container style={{padding: '10%', paddingTop:'5%'}}>
          <Typography style={{textAlign: 'center', paddingBottom: '1%'}} variant='h6'>Create Profile</Typography>
          <Typography variant='subtitle1'>
              *Required<br />
              *Name:<br />
              Age:<br />
              Gender:<br />

          </Typography>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Typography variant='subtitle1'>Upload a profile picture</Typography>
            <GenericButton>Browse</GenericButton>
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-end', paddingTop: '35%'}}>
            <GenericButton style={{marginRight: '1%'}}>Cancel</GenericButton>
            <GenericButton>Add Profile</GenericButton>
          </div>
        </Container>
      </div>
      
}

export default HeadmateForm;