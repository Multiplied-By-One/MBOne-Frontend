import React from 'react';
import { Typography, Grid } from '@material-ui/core';

export default class GenericEntry extends React.Component {
    journalSpace() {
      // make container half
      return (
        <div>
          <Typography variant='h6'>{this.props.text}</Typography>
        </div>
      );
    }
    meetingSpaceEntry() {
      return (
        <div>
          <Typography variant='caption'>{this.props.text}</Typography>
          <Typography variant='subtitle1'>{this.props.subText}</Typography>
        </div>
      );
    }
    eyeSpaceProfileEntry() {
      return (
        <div>
          <Grid container>
            <Grid item xs='6'>
              <Typography variant='caption'>{this.props.text}</Typography>
              <Typography variant='subtitle1'>{this.props.subText}<br />{this.props.age}</Typography>
            </Grid>
            <Grid item xs='6'>
              {this.props.img}
            </Grid>
          </Grid>
        </div>
      );
    }
    systemMapEntry(){
      return (
        <div>
          {this.props.img}
          <Typography variant='h6'>{this.props.text}</Typography>
        </div>
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