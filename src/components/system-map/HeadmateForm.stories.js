import React from 'react';
   
import HeadmateForm from './HeadmateForm';

export default {
  title: 'HeadmateForm',
  component: HeadmateForm,
};

const Template = (args) => <HeadmateForm {...args}/>;

export const display = Template.bind({});