import React from 'react';
import Container from "../container/Container";
import GenericButton from "../buttons/GenericButton";
import { Typography, Grid } from '@material-ui/core';

export default class GenericEntry extends React.Component {
    journalSpace() {
      // make container half
      return (
        <Container>
          <Typography variant='h6'>{this.props.text}</Typography>
        </Container>
      );
    }
    meetingSpaceEntry() {
      return (
        <Container>
          <Typography variant='caption'>{this.props.text}</Typography>
          <Typography variant='subtitle1'>{this.props.subText}</Typography>
        </Container>
      );
    }
    eyeSpaceProfileEntry() {
      return (
        <GenericButton style={{ marginLeft: '1rem', marginTop: '1rem' }} >
          <Grid container>
            <Grid item xs='6'>
              <Typography variant='caption'>{this.props.text}</Typography>
              <Typography variant='subtitle1'>{this.props.subText}<br />{this.props.age}</Typography>
            </Grid>
            <Grid item xs='6' style={{ paddingLeft: '1rem' }}>
              <Container>
                <img src={this.props.img} style={{maxHeight: '120px'}} alt="profile picture"/>
              </Container>
            </Grid>
          </Grid>
        </GenericButton>
      );
    }
    systemMapEntry(){
      return (
        <Container>
          {this.props.img}
          <Typography variant='h6'>{this.props.text}</Typography>
        </Container>
      );
    }
    render() {
      let {text, subText, age, img} = this.props;
      if (subText==undefined && age==undefined && img==undefined) {
        return this.journalSpace();
      }
      else if (age==undefined && img==undefined) {
        return this.meetingSpaceEntry();
      }
      else if (subText==undefined && age==undefined) {
        return this.systemMapEntry();
      }
      else {
        return this.eyeSpaceProfileEntry(); 
      }
    }
}

// add React propTypes ? 