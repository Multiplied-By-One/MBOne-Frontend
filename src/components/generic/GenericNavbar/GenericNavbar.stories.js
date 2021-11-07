import React, {Fragment} from 'react'
import GenericNavbar from './GenericNavbar'
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Badge from '@material-ui/core/Badge'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import Typography from '@material-ui/core/Typography'

export default {
  component: GenericNavbar,
  title: 'GenericNavbar',
}

const defaultCenterTestString = 'Multiplied By One'

export const OneLeftOneRight = () => (
  <div style={{width: "50%"}}>
    <GenericNavbar
      left={<AddIcon />}
      center={"Multiplied By One"}
      right={<MoreHorizIcon />}
    />
  </div>
)

export const ZeroLeftZeroRight = () => (
  <div style={{width: "25%"}}>
    <GenericNavbar
      center={"Multiplied By One"}
    />
  </div>
)

export const OneLeftZeroRight = () => (
  <div>
    <GenericNavbar
      left={<AddIcon />}
      center={"Multiplied By One"}
    />
  </div>
)

export const ZeroLeftOneRight = () => (
  <div style={{width: "50%"}}>
    <GenericNavbar
      center={"Multiplied By One"}
      right={<MoreHorizIcon />}
    />
  </div>
)

export const TwoLeftOneRight = () => (
  <div>
    <GenericNavbar
      left={<Fragment><AddIcon /><SearchIcon /></Fragment>}
      center={"Multiplied By One"}
      right={
        <Badge badgeContent={4} color="primary">
          <span>Eye Box</span>
        </Badge>
      }
    />
  </div>
)

export const TwoLeftTwoRight = () => (
  <div style={{width: "50%"}}>
    <GenericNavbar
      left={
        <Fragment>
          <ArrowBackIcon />
          <Typography variant="button" display="block" gutterBottom>Create</Typography>
        </Fragment>
      }
      center={"Multiplied By One"}
      right={
        <Fragment>
          <Badge badgeContent={4} color="primary">
            <Typography variant="button" display="block" gutterBottom>Eye Box</Typography>
          </Badge>
          <ArrowRightAltIcon />
        </Fragment>
      }
    />
  </div>
)

