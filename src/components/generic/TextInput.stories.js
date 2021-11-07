import React from 'react';
   
import TextInput from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
};

const Template = (args) => <TextInput {...args}/>;

export const systemMap = Template.bind({});

systemMap.args = {
    font: 'subtitle1',
    label: 'Age:'
}