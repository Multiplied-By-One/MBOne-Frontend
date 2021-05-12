import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import deepMerge from 'deepmerge';

/**
 * Base theme properties for all other mui themes
 */
const baseTheme = {
    typography: {
        h6: {
            fontFamily: 'Walter Turncoat',
        },
        subtitle1: {
            fontFamily: 'Francois One',
        },
        body1: {
            fontFamily: 'Economica',
        },
        caption: {
            fontFamily: 'Funky Olive',
            fontSize: '20%',
        }
    }
}

let MBODark = createMuiTheme(deepMerge(baseTheme, {
    themeName: 'MBO Dark',
    palette: {
        text:{
            primary: "#FFFFFF"
        },
        primary: {
            main: '#222222',
            background: '#333333',
        },
        secondary: {
            main: '#5f1c17',
        },
    },
}));
MBODark = responsiveFontSizes(MBODark);

export {MBODark}