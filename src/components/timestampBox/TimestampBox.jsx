import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import React from "react"
import "../../styles/timestampBox.css"


const TimestampBox = withStyles((theme) => {
  return {
      root: {
        backgroundColor: theme.palette.primary.main,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: theme.palette.secondary.main,
        boxShadow: `5px 5px 3px -1px ${theme.palette.secondary.main}`,
        borderRadius: 12,
        height: 75,
        display: "flex",
        width: 300
      }
    }
})(Box)

const Timestamp = ()=>{
  return <TimestampBox>
      <div className="timestampBoxDate"style={{borderColor:"#5f1c17",borderWidth: 3,borderStyle: 'solid',borderRadius: 12}}>
        <div>
          <h6>May 3</h6>
        </div>
        <div>
          <h6>2021</h6>
        </div>
      </div>
      <div className="timestampBoxTitleDiv" >
        <p className="timestampBoxTitle">Titleasdasdasddddddddddddddddddddddddddddddddddddddddddddddddassssssssss</p>
      </div>
        
    </TimestampBox>
}

export default Timestamp