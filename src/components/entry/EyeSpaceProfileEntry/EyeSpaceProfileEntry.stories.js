import React from 'react';
import EyeSpaceProfileEntry from './EyeSpaceProfileEntry';

export default {
  title: 'EyeSpaceProfileEntry',
  component: EyeSpaceProfileEntry,
};

const Template = (args) => <EyeSpaceProfileEntry {...args}/>;

export const Primary = Template.bind({})

Primary.args = {
  text: "Melissa",
  subText: "Female",
  age: "Age LOL",
  img: 'https://i.pinimg.com/736x/6c/12/a8/6c12a8359754acb9f176c9155637c912.jpg',
}