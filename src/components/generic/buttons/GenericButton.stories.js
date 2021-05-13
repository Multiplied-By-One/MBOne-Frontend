import GenericButton from './GenericButton'
import { storiesOf } from '@storybook/react';
import { Typography } from '@material-ui/core';
import {text} from '@storybook/addon-knobs';
import { Button } from '@material-ui/core';

const clicked = () => {
    console.log('clicked');
  }

storiesOf('Buttons', module)
    .add('System Menu Button', () => (
        <GenericButton>
           <Typography variant='h6'>{text('Inner Text', 'Some Text!')}</Typography>
        </GenericButton>
    ))
    .add('on click test', () => (
        <GenericButton onClick={clicked}
        >
           <Typography variant='h6'>{text('Inner Text', 'Some Text!')}</Typography>
        </GenericButton>
    ))