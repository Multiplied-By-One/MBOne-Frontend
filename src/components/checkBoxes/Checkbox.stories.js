import SystemMapCheckbox from './SystemMapCheckbox'
import { storiesOf } from '@storybook/react';
import { Typography } from '@material-ui/core';
import { text } from '@storybook/addon-knobs';

storiesOf('Checkbox', module)
    .add('System Menu Checkbox', () => (
        <div>
        <Typography variant='h6'>{text('Inner Text', 'Some Text!')} </Typography>
        <SystemMapCheckbox/>
</div>
        
    ))