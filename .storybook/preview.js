import { muiTheme } from 'storybook-addon-material-ui'
import {MBODark} from '../src/themes/theme.js'
import '!style-loader!css-loader!resolve-url-loader!sass-loader!./../src/styles/main.scss';

export const decorators = [
	muiTheme([
    MBODark
  ])
];