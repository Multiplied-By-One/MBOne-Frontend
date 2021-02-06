import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    color: props => props.theme.palette.text.primary,
  },
  item: {
    flexBasis: props => props.itemFlexBasis,
  }
}));

const FormGroup = (props) => {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.root} spacing={props.spacing}>
      <Grid item className={classes.item} xs={6}>
        <label>{props.label}</label>
      </Grid>
      <Grid item className={classes.item} xs={6}>
        {props.children}
      </Grid>
    </Grid>
  );
}

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  spacing: PropTypes.number,
  itemFlexBasis: PropTypes.string,
}

FormGroup.defaultProps = {
  itemFlexBasis: 'auto',
  spacing: 2,
}
 
export default withTheme(FormGroup);