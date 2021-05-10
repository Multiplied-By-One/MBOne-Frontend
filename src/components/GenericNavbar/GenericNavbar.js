import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles, withTheme } from '@material-ui/core/styles'

const useStyles = makeStyles({
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  sideDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    "&> *": {
      marginLeft: '2px',
      marginRight: '2px'
    }
  },
  centerDisplay: {
    textTransform: 'uppercase',
  }
})

const GenericNavbar = (props) => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.navDisplayFlex}>
        <div className={classes.sideDisplayFlex}>{props.left}</div>
        <div className={classes.centerDisplay}>{props.center}</div>
        <div className={classes.sideDisplayFlex}>{props.right}</div>
      </Toolbar>
    </AppBar>
  );
}

GenericNavbar.propTypes = {
  center: PropTypes.string.isRequired
}
 
export default withTheme(GenericNavbar);