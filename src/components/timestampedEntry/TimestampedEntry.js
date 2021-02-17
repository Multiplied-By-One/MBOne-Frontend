import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'stretch',
    color: props => props.theme.palette.text.primary,
  },
  itemLeft: {
    flexBasis: props => props.itemFlexBasis,
    border: [[ '2px', 'solid', theme.palette.contour ]],
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: [[ 5, 0, '#080808' ]],
  },
  itemRight: {
    flexBasis: props => props.itemFlexBasis,
    border: [[ theme.shape.borderWidth, 'solid', theme.palette.contour ]],
    borderLeftWidth: '0px',
    borderRadius: [[ 0, theme.shape.borderRadius, theme.shape.borderRadius, 0 ]],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    marginLeft: '5px',
    fontFamily: theme.typography.fontFamily,
  }
}));

const TimestampedEntry = props => {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.container} spacing={props.spacing}>
      <Grid item className={classes.itemLeft} xs={6}>
        {props.children}
      </Grid>
      <Grid item className={classes.itemRight} xs={6}>
        <span>{props.entryTitle}</span>
      </Grid>      
    </Grid>
  );
}

TimestampedEntry.propTypes = {
  entryTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  itemFlexBasis: PropTypes.string,
  spacing: PropTypes.number,
}

TimestampedEntry.defaultProps = {
  itemFlexBasis: 'auto',
  spacing: 2,
}
 
export default withTheme(TimestampedEntry);



