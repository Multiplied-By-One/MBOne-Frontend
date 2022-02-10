import React from "react";
import { Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
    root: {
       borderWidth: 0,
        borderStyle: 'solid',
        color: theme.palette.text.primary,
        borderRadius: 0,
        transform: "scale(1)",
        padding: 0,
        margin:0,
        width:25,
        height:25,
        iconStyle: { color: 'white' },
    },
    icon: {
        borderRadius: 3,
        width: 24,
        height: 24,
        backgroundColor: '#f5f8fa',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24px' height='24px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' fill='%23fff'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,//'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
    },
    checkedIcon: {
         color: theme.palette.text.primary,
         padding: 0,
         margin:0,
         width: 24,
         height: 24,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24px' height='24px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' fill='%23fff'%3E%3C/path%3E%3Cpath transform='translate(4, 4)' fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
      }

}));

function SystemMapCheckbox(props) {
    const classes = useStyles();
       
    return (
        <Checkbox className={classes.root}
            checkedIcon={<span className={classes.checkedIcon} />}
            {...props}>
            icon={<span className={classes.icon} />}
        </Checkbox>
           
  );
};
export default SystemMapCheckbox

