import React from 'react';
import JournalEntry from './JournalEntry';

export default {
  title: 'JournalEntry',
  component: JournalEntry,
};

const Template = (args) => <JournalEntry {...args}/>;

export const Primary = Template.bind({})

Primary.args = {
    text: 'I am a journal entry that still needs container styling'
}