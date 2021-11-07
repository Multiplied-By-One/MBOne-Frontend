import React from 'react';
   
import HeadmateList from './HeadmateList';

export default {
  title: 'HeadmateList',
  component: HeadmateList,
};

const Template = (args) => <HeadmateList {...args}/>;

export const display = Template.bind({});