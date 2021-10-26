import React from 'react';
import MeetingSpaceEntry from './MeetingSpaceEntry';

export default {
  title: 'MeetingSpaceEntry',
  component: MeetingSpaceEntry,
};

const Template = (args) => <MeetingSpaceEntry {...args}/>;

export const Primary = Template.bind({})

Primary.args = {
  text: "Maggie",
  subText: "Maggies Space",
}