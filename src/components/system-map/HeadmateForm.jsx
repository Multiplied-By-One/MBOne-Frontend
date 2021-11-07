import React, { useState } from 'react';

import Container from '../generic/container/Container'
import GenericButton from '../generic/buttons/GenericButton'
import { Typography } from '@material-ui/core'
import TextInput from '../generic/TextInput'
import { createHeadMate } from '../../api/headMate';

function HeadMateForm() {
    const [ name, setName ] = useState('')
    const [ age, setAge ] = useState('')
    const [ gender, setGender ] = useState('')

    // spacing for now, will be awkward in the long run, especially smaller screen. fix default container spacing
      return <div style={{paddingLeft: '25%', paddingRight: '25%'}}>
        <Container style={{padding: '5%', paddingTop:'5%'}}>
          
          <Typography style={{textAlign: 'center', paddingBottom: '1%'}} variant='h6'>Create Profile</Typography>
          
          <form>
            <Typography variant='subtitle1'>
                *Required<br />
                <TextInput 
                  onChange={ (event) => { setName(event.target.value) }} 
                  label="*Name" 
                  font="subtitle1"
                />
                <TextInput 
                  onChange={ (event) => { setAge(event.target.value) }} 
                  label="Age" 
                  font="subtitle1"
                />
                <TextInput 
                  onChange={ (event) => { setGender(event.target.value) }} 
                  label="Gender" 
                  font="subtitle1"
                />
            </Typography>
          </form>
          
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Typography variant='subtitle1'>Upload a profile picture</Typography>
            <GenericButton>Browse</GenericButton>
          </div>

          <div style={{display: 'flex', justifyContent: 'flex-end', paddingTop: '35%'}}>
            <GenericButton style={{marginRight: '1%'}}>Cancel</GenericButton>
            <GenericButton onClick={
              async () => {
                await createHeadMate({
                  "name": name,
                  "age": age,
                  "gender": gender,
                  "image": 'https://clipartart.com/images/clipart-profile-4.jpg'
                })
              }
            }>Add Profile</GenericButton>
          </div>
        </Container>
      </div>
}

export default HeadMateForm;