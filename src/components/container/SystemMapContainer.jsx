import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
            backgroundColor: theme.palette.primary.main,
            borderWidth: 3,
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.main,
            boxShadow: `5px 5px 3px -1px ${theme.palette.secondary.main}`,
            borderRadius: 12,
            height: 400,
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.text.primary,
            overflow: 'auto',
        scrollBehaviour: 'smooth',
        padding: 20,
                
        '&::-webkit-scrollbar': {
            width: 10,
           },
        '&::-webkit-scrollbar-track': {
            scrollbarColor: 'red',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,  
            outline: '1px solid red' 
        }
    },

}));


 function SystemMapContainer(props) {
    const classes = useStyles();

     return (
         <Container className={classes.root} {...props} >
             
         </Container>
    );
}
export default SystemMapContainer
