import SystemMapButton from './SystemMapButton'
import { storiesOf } from '@storybook/react';
import { Typography } from '@material-ui/core';
import {text} from '@storybook/addon-knobs';

storiesOf('Buttons', module)
    .add('System Menu Button', () => (
        <SystemMapButton>
           <Typography variant='h6'>{text('Inner Text', 'Some Text!')}</Typography>
        </SystemMapButton>
    ))
    