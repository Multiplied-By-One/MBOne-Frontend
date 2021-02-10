import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            backgroundColor: theme.palette.primary.main,
            borderWidth: 3,
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.main,
            boxShadow: `5px 5px 3px -1px ${theme.palette.secondary.main}`,
            borderRadius: 12,
            height: 50,
            
        },
        '& .MuiInputBase-input':
        {
            color: "Black",
            textAlign: "center",
            
        }
    },
}));


export default function SystemMapTextinput() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField required id="standard-disabled" label="Disabled" type="text" defaultValue="Enter"
                    className={classes.root}
                    InputProps={{
                        className: classes.input
                    }}/>
                </div>
        </form >
    );
}
