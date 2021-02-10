import SystemMapTextinput from './SystemMapTextinput'
import { storiesOf } from '@storybook/react';
//import { Typography } from '@material-ui/core';
//import { text } from '@storybook/addon-knobs';

storiesOf('Textinput', module)
    .add('System Menu Textinput', () => (
        <div>
            <SystemMapTextinput />
        </div>

    ))