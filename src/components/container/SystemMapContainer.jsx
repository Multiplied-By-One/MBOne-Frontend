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
            //display: 'flex',
            //flexDirection: 'column',
            //flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.text.primary,
            overflow: 'auto',
        scrollBehaviour: 'smooth',
        padding: 20,
        //paddingBottom: 50,
        
        '&::-webkit-scrollbar': {
            width: 10,
            //background: theme.palette.primary.main,
        },
        '&::-webkit-scrollbar-track': {
            scrollbarColor: 'red',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,  //'rgba(0,0,0,.1)',
            outline: '1px solid red' //'1px solid slategrey'
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