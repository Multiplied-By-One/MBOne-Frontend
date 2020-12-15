import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import blueGrey from '@material-ui/core/colors/blueGrey'
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';


const SearchBar = (props) => {
    const styles = {
        root: {
            flexGrow: 1,
        },
        navBar: {
            backgroundColor: blueGrey[800],
            color: blueGrey[50]
        },
        appbar: {
            alignItems: 'center'
        },

    }
    const useStyles = makeStyles((theme) => ({  
        
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: 'none',
            align: "center",
            [theme.breakpoints.up('sm')]: {
                display: 'block',
                flexGrow: 1,
            },
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        }
}))
    const classes = useStyles();
   
    return (
        
        <div style={styles.grow}>
            <AppBar position="static" className={styles.appbar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                    <AddIcon color="inherit"></AddIcon>
                    </IconButton>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Typography className={classes.title} variant="h6" align='center' noWrap >
                        {props.name}
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton color="inherit" edge="end">
                            <Badge  color="secondary">
                                <InfoIcon />
                            </Badge>
                        </IconButton>
                        <IconButton  color="inherit">
                            <Badge  color="secondary">
                                <AppsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <SettingsIcon />
                        </IconButton>
                    </div>
                    
                 
                </Toolbar>
            </AppBar>
        </div>

    );
};



export default SearchBar;