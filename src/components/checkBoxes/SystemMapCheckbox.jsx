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
       //backgroundImage: `url("data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAB8AAABGCAYAAAA0L08GAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJ0SURBVGhD7ZcxSFtBGMfvtXGxpQRNTaB2S8SlVNC9gzhmcmwsWFqQoIsgDg7GQcElo0tpnTp0zmbJUIdODeggSNdaMFSqIAbSCjHfl%2FuS917u8i55Z%2B6J7wcf%2F7v3HvfP%2F%2B6d77RqtRozxQOuRhAmtyzrVqaj7mXxJiI1jz0Z4L12Ig%2B7n7DT82qbudFpD82N4OuF%2B5B9jSrj%2Fc5n3grgC9dT8t2lOd5SJ7356Q4mX555iZr%2Feoj6%2FccR6s7YLur0WhmVKG7GUbM%2F51H3txfZu497epKnUiksL7yekybfmp3ivRZ%2Fr%2F6jjj9rJIsnRlG%2FlUqoxKvJSdTy6QkqoC25LpSSU%2BKhR433YCQ6hHr8u7HWNBOE6HrgkkvNIS0VJIaivhtIai9VgrnmvKkV95qjuZLZwkJD462XqHD9C3UwGkUlKhcXqOnIc8Y2NrBth35Ey1wweBMYwI%2F5%2Bjr2kXqfzH2tOQwOBWb2outeBHOrdQMlVU1M3P3kvRKaG6FpXhj%2Bh1V8fNlWfpGN5Uj%2Bp6z%2BRdJBcNb8af3vduXsDKsfdEyu84eIxgrOtAODsRhWPwhGcthmgdpqOpdANFbTHLYZVD8RJte5xQDZWM0DZGHtLV6AwyA9TNM0vZJH7ZXC6hvHWHSAjOAVCY5fzE%2BgE1%2BcH4eD4zwbTcywWPQFv%2BIE7gOi9F1tNbexX5T%2FaZgYX%2BYtJ6rJ7TjO7dARFdyDgaH8IBoX6GradROaGyE0V6JSLTvKjdd9N8rmMjPC676IcM2NEJob4f6aw8edN9uBE04mk8F2MplEdZPL5Rg80%2Bm%2B%2FQBhJ1xzI3iuOW%2F6QrbmHc1vF8ZuAI5mc0Sx8Q83AAAAAElFTkSuQmCC")`,
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
    },
    checkedIcon: {
        //backgroundColor: '#137cbd',
       // backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        color: theme.palette.text.primary,
      // backgroundPositionX: -1,
        //backgroundPositionY: -5,
        padding: 0,
        margin:0,
       // borderWidth: 2,
        //borderStyle: 'solid',
        width: 24,
        height: 24,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24px' height='24px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' fill='%23fff'%3E%3C/path%3E%3Cpath transform='translate(4, 4)' fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
       /* '&:before': {
            display: 'block',
           // transform: "scale(1)",
            width: 24,
            height: 24,
            /*backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",*/

            //backgroundImage: `url("data:image/svg+xml,%3Csvg width='24px' height='24px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' fill='%23fff'%3E%3C/path%3E%3Cpath transform='translate(4, 4)' fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
          /*  content: '""',
        },*/
       /* 'input:hover ~ &': {
            backgroundColor: '#333333',
        },*/
    }

}));//(props => <Checkbox color="default" {...props} />);

function SystemMapCheckbox(props) {
    const classes = useStyles();
   
       
    return (
        //<div>
        // <Checkbox className={classes.root}  > </Checkbox>
        <Checkbox className={classes.root}
            checkedIcon={<span className={classes.checkedIcon} />}
            {...props}>
            icon={<span className={classes.icon} />}
        </Checkbox>
           
  );
};
export default SystemMapCheckbox

/*const styles  = (theme) => {
    return {
        root: {
            //backgroundColor: theme.palette.primary.main,
            borderWidth: 3,
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.main,
           // colorSecondary: theme.palette.secondary.main,
            boxShadow: `5px 5px 3px -1px ${theme.palette.secondary.main}`,
            borderRadius: 12,
           
            //height: 50
        }
    }
}

function HigherOrderComponent(props) {
    const { classes } = props;
    return <Checkbox className={classes.root}> </Checkbox>;
}

HigherOrderComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(HigherOrderComponent);*/