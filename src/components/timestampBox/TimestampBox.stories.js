import Timestamp from './TimestampBox'
import { storiesOf } from '@storybook/react';
import { Typography } from '@material-ui/core';
import {text} from '@storybook/addon-knobs';

storiesOf('Box', module)
    .add('Timestamp', () => (
        <Timestamp>
        </Timestamp>
    ))