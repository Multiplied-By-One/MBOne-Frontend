import React from 'react';
import FormGroup from './FormGroup';
import { TextField, Checkbox } from '@material-ui/core';

export default {
  component: FormGroup,
  title: 'FormGroup',
}

export const FormGroupWithNoInput = () => <FormGroup label="Connect to your name on the System Map"></FormGroup>

export const FormGroupWithTextField = () => <FormGroup label="TextField"><TextField id="standard-basic" label="Standard" /></FormGroup>

export const FormGroupWithCheckbox = () => <FormGroup label="Checkbox"><Checkbox /></FormGroup>