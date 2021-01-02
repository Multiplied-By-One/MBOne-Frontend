import SystemMapButton from './SystemMapButton'
import { storiesOf, addDecorator } from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';

storiesOf('MBO', module)
    .addDecorator(muiTheme())
    .add('System Menu Button', () => (
        <SystemMapButton>System Map</SystemMapButton>
    ))
