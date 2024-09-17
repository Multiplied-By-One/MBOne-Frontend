import React from 'react';
   
//import Select from './Select';
import {TextInput, SelectInput, Checkboxes} from './FormInputs';
// import Button from '../buttons/SystemMapButton'
import { Typography } from '@material-ui/core';




export default {
    title: 'FormInputs',
    component: TextInput, SelectInput, Checkboxes
  };

const Template1 = (args) => <SelectInput {...args}/>;

export const selectInputWithPlaceholder = Template1.bind({});
export const selectInputWithDefaultValue = Template1.bind({});

selectInputWithPlaceholder.args = {
    placeholder: 'Placeholder',
    options: ['Option 1', 'Option 2']
}

selectInputWithDefaultValue.args = {
    defaultValue: 'Default Value',
    options: ['Option 1', 'Default Value', 'Option 2']
}

const Template2 = (args) => <TextInput {...args}/>;
export const textInput = Template2.bind({});

textInput.args = {
    placeholder: 'Enter',
}

//const Template3 = (args) => <Checkboxes {...args}/>;
export const checkboxes = () => (
    <Checkboxes />
    
)

