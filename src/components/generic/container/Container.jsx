import { makeStyles } from "@material-ui/styles";
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: theme.palette.secondary.main,
        boxShadow: `5px 5px 3px -1px ${theme.palette.primary.main}`,
        borderRadius: 12,
        padding: 0,

        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.text.primary,
        overflow: 'auto',
        scrollBehaviour: 'smooth',
                
        '&::-webkit-scrollbar': {
            width: 10,
           },
        '&::-webkit-scrollbar-track': {
            scrollbarColor: 'red',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'white',  
            outline: '1px solid white' 
        }
    },

}));


 function GenericContainer(props) {
    const classes = useStyles();

     return (
        <Container className={classes.root}  {...props}></Container>
    );
}
export default GenericContainer