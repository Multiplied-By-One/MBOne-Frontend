// YourComponent.stories.js

import React from 'react';

import GenericEntry from './GenericEntry';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'GenericEntry',
  component: GenericEntry,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <GenericEntry {...args}/>;

export const JournalEntry = Template.bind({});
export const MeetingSpace = Template.bind({});
export const EyeProfile = Template.bind({});
export const SystemMap = Template.bind({});

JournalEntry.args = {
  /*👇 The args you need here will depend on your component */
  text: 'I am a journal entry that still needs container styling',
};

MeetingSpace.args = {
  text: "Maggie",
  subText: "Maggies Space",
}

EyeProfile.args = {
  text: "Melissa",
  subText: "Female",
  age: "Age LOL",
  img: 'alt txt of an img',
}

SystemMap.args = {
  text: "Wonda",
  img: 'alt txt of an img',
}