import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #222222',
    borderRadius: "10px",
    width: "15vw",
    color: "black",
    backgroundColor: "#f5f1e7",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


export default function IconMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  var options = props.options;
  const MenuList = options.map((option) => (
    <MenuItem
      style={options.length > 1 ? { border: "1px #222222", borderStyle: "none none solid none" } : null}
      key={option}
      onClick={() => {
        props.clickedOption(option)
        setAnchorEl(null)
      }
      }>
      {option}
    </MenuItem >
  ))
  return (
    <div {...props}>
      {/* <span onMouseOver={handleClick}> */}
      <MoreHorizIcon onMouseOver={handleClick} style={{ verticalAlign: "middle" }} />
      {/* </span> */}
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClick={handleClose}
      >
        <div onMouseLeave={handleClose} > {MenuList} </div>
      </StyledMenu>
    </div>
  );
}

IconMenu.propTypes = {
  options: PropTypes.array.isRequired,
}
