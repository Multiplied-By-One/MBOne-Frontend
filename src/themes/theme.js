import { createMuiTheme } from '@material-ui/core/styles';
import deepMerge from 'deepmerge';

/**
 * Base theme properties for all other mui themes
 */
const baseTheme = {
    typography: {
        fontFamily: [
            'Walter Turncoat'
        ]
    }
}

const MBODark = createMuiTheme(deepMerge(baseTheme, {
    themeName: 'MBO Dark',
    palette: {
        text:{
            primary: "#FFFFFF"
        },
        primary: {
            main: '#222222',
        },
        secondary: {
            main: '#5f1c17',
        },
    },
}));

export {MBODark}