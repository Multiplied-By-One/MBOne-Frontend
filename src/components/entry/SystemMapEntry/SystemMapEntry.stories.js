import React from 'react';
import SystemMapEntry from './SystemMapEntry';

export default {
  title: 'SystemMapEntry',
  component: SystemMapEntry,
};

const Template = (args) => <SystemMapEntry {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  text: "Wonda",
  img: 'https://i.pinimg.com/736x/6c/12/a8/6c12a8359754acb9f176c9155637c912.jpg',
}