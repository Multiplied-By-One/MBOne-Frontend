import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types'; 

const MyTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: "#f5f1e7",
    color: 'black',
    border: "1px solid #222222",
    borderRadius:"8px",
    minWidth: "200px",
    textAlign:"center",
    fontSize:"1rem",
  },
}))(Tooltip);


export default function Tooltips(props) {
  console.log(props);
  return (
    <div>
      <MyTooltip title={props.title}>
        {props.icon}
      </MyTooltip>
    </div>
  );
}

Tooltips.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
} 