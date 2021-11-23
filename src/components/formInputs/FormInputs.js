import React from 'react';
import Container from '../generic/container/Container'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Typography, TextField, Checkbox, FormControl, MenuItem, makeStyles, Select, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    //selectInput style
    icon: {
      top: "6px",
      left: 0,
      fontSize: "large",
      color: "inherit" 
    },
    formControlLabel: {
      left: 24
    },
    selectSelect: {
      textAlign:"center"
    },
  
    iconOpen:{
      transform:'none'
    },
    list: {
      background: '#333333',
      "& li":{
        paddingTop:12,
        paddingBottom:12,
      },
      "& li:hover":{
        background: '#5f1c17'
      },
      "& li.Mui-selected":{
        background: '#5f1c17'
      },
      "& li.Mui-selected:hover":{
        background: '#5f1c17'
      }
    },
    
    //checkbox style
    cb_root: {
        color: 'white',
      },   
  }));

export const TextInput = (props) => {
    return(
        <Typography variant= 'subtitle1'>
            <Container style={{overflow:"hidden" }}>
                <TextField required style={{width: "100%", paddingLeft:"2%"}} onChange={props.onChange} />
            </Container>
        </Typography>
    )
}

export const SelectInput = (props) => {
    const classes = useStyles();
    const menuProps = { classes: { list: classes.list},}
    
    return (
    <Typography variant='subtitle1'>
        <Container>
            <FormControl fullWidth style={{overflow:"hidden"}}>
                <Select
                defaultValue = {props.placeholder}
                disableUnderline
                classes={{icon: classes.icon, select: classes.selectSelect, iconOpen:classes.iconOpen}}
                MenuProps={menuProps}
                IconComponent={ArrowForwardIosIcon}
                >
                <MenuItem value={props.placeholder}>
                    <span>{props.placeholder}</span>
                </MenuItem>
                  {props.options.map((option) => option === undefined ? '' : 
                  <MenuItem key={option} value={option} >
                  {option}
                  </MenuItem> )}
                </Select>
            </FormControl>
        </Container>
    </Typography>
  )
}


export const Checkboxes = () => {
  const classes = useStyles();

  return(
    <Typography variant='subtitle1'>
        <Checkbox classes={{root: classes.cb_root}} />
    </Typography>
    )
}


